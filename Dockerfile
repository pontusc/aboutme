FROM node:current-alpine3.20 AS build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY build-resources/nginx-default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
