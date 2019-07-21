ARG DRONE_COMMIT_ARG
ARG DRONE_COMMIT_LINK_ARG
FROM node:10-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
ENV DRONE_COMMIT=$DRONE_COMMIT_ARG
ENV DRONE_COMMIT_LINK=$DRONE_COMMIT_LINK_ARG
RUN npm install --silent && npm run build

FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]