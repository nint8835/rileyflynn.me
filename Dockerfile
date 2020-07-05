FROM node:10-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
ENV NODE_ENV production
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
RUN cd terraform &&\
wget https://github.com/nint8835/terraform-provider-gatsby/releases/download/refs/heads/master/terraform-provider-gatsby &&\
apk add terraform &&\
terraform init &&\
terraform apply -auto-approve &&\
cd .. &&\
npm install --silent && npm run build

FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]