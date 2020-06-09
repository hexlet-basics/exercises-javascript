FROM melodyn/base-image:latest

WORKDIR /exercises-javascript

COPY --from=melodyn/base-image:latest /tmp/basics/common/* ./
COPY . .

ENV NODE_PATH /exercises-javascript/src

RUN npm install -g npm-check-updates
RUN npm ci
