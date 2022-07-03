FROM node:18-alpine3.15
LABEL maintainer "Victor Campos <victorhscampos@gmail.com>"
COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT node index.js
EXPOSE 8080
