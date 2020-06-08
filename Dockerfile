FROM docker.pkg.github.com/melodyn/base-image/image:base

WORKDIR /exercises-javascript

COPY --from=docker.pkg.github.com/melodyn/base-image/image:base /tmp/basics/common/* ./
COPY . .

ENV NODE_PATH /exercises-javascript/src

RUN npm install -g npm-check-updates
RUN npm ci
