-include /opt/basics/common/common.mk

compose-bash:
	docker-compose run exercises bash

setup: install

install:
	npm ci

code-lint:
	npx eslint modules
