FROM hashicorp/terraform:0.14.7 as terraform
WORKDIR /terraform
COPY ./terraform /terraform
RUN terraform init && terraform apply -auto-approve

FROM node:10-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
ENV NODE_ENV production
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
COPY --from=terraform /terraform/terraform.tfstate /usr/src/app/terraform/terraform.tfstate
RUN npm install && npm run build

FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
