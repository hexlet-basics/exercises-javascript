FROM hexletbasics/base-image:latest

WORKDIR /exercises-javascript

COPY . .

ENV NODE_PATH /exercises-javascript/src

RUN npm install -g npm-check-updates
RUN npm ci
