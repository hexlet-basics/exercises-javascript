FROM docker.pkg.github.com/melodyn/hexlet-basics-base-image/image:base as base
FROM node:14
COPY --from=base . .

WORKDIR /exercises-javascript

RUN npm install -g npm-check-updates
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

ENV NODE_PATH /exercises-javascript/src

COPY . .
