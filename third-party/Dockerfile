FROM node:20.18-alpine3.21
COPY . /app
WORKDIR /app
RUN npm ci
CMD npm start
EXPOSE 3007