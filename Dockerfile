ARG NODE_VERSION=24.14.0-slim

FROM node:${NODE_VERSION} AS dependencies

# arbitrary directory, refers to containers directory.
WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY ./ .

CMD ["npm", "run", "dev"]





