FROM node:13.12

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN apt-get update && apt-get install -yqq git curl python3-pip libyaml-dev zip unzip

RUN pip3 install yamllint
RUN apt-get install -yqq jq
RUN pip3 install yq
RUN npm install -g ajv-cli

WORKDIR /exercises-javascript

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

ENV NODE_PATH /exercises-javascript/src

COPY . .
