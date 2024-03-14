FROM node:20-alpine3.18 AS development

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . ./

RUN npm run build

FROM node:20-alpine3.18 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . ./

RUN npm run build

CMD ["node", "dist/main"]