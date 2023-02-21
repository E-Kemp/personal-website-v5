FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 80

CMD gatsby serve --port 80 --host 0.0.0.0

# FROM nginx:1.18-alpine AS deploy

# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=build /app/public .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]