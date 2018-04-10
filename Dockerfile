FROM node:alpine

RUN apk --update add autoconf automake build-base libtool nasm
RUN apk add python3
RUN pip3 install yamllint
# RUN pecl update-channels && pecl install xdebug
# RUN echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/xdebug.ini

WORKDIR /exercises-javascript

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . /exercises-javascript
