FROM hexletbasics/base-image

ENV NODE_PATH /exercises-javascript/src
ENV PATH=/exercises-javascript/bin:$PATH

WORKDIR /exercises-javascript

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
