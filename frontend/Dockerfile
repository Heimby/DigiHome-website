FROM node:24-alpine AS build-env
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production-stage
COPY --from=build-env /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-env /app/build/client /app

RUN sha256sum /app/index.html | cut -d ' ' -f 1  > /app/index.html.sha256sum

EXPOSE 80
RUN apk add --no-cache jq

ARG APP_BUILD=next
ARG APP_BUILD_DATE=2000-01-01
ENV APP_BUILD=$APP_BUILD
ENV APP_BUILD_DATE=$APP_BUILD_DATE
ARG APP_VERSION=next

COPY docker-entrypoint.sh .
RUN ["chmod", "+x", "/docker-entrypoint.sh"]
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]