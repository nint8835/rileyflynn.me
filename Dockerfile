ARG DRONE_COMMIT
ARG DRONE_COMMIT_LINK
FROM node:10-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
ENV DRONE_COMMIT=$DRONE_COMMIT
ENV DRONE_COMMIT_LINK=$DRONE_COMMIT_LINK
RUN npm install --silent && npm run build

FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]