FROM docker.pkg.github.com/melodyn/base-image/image:base as base
FROM node:14
COPY --from=base . .

WORKDIR /exercises-javascript
ENV NODE_PATH /exercises-javascript/src

COPY --from=base /tmp/basics/common/* ./
COPY . .

RUN npm install -g npm-check-updates
RUN npm ci
