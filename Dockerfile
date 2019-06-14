FROM node:12.4

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN apt-get update && apt-get install -yqq git python3-pip

RUN pip3 install yamllint

WORKDIR /exercises-javascript

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

ENV NODE_PATH /exercises-javascript/src

COPY . /exercises-javascript
