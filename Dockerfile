ARG NODE_VERSION=24.14.0-slim

FROM node:${NODE_VERSION} AS dependencies

WORKDIR /halloween-horror-night

COPY ./halloween-horror-night/package.json ./halloween-horror-night/package-lock.json ./

RUN npm install

COPY ./halloween-horror-night .

CMD ["npm", "run", "dev"]





