FROM node:20.18-alpine3.21
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3007
CMD npm start