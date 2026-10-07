ARG NODE_VERSION=24.14.0-slim
FROM node:${NODE_VERSION}

WORKDIR /app

# Prisma needs openssl on slim images
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

RUN npx prisma generate
RUN npm run build

ENV NODE_ENV=production
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]