-include /opt/basics/common/common.mk

compose-setup: compose-build compose-install

compose:
	docker-compose up

compose-build:
	docker-compose build

compose-install:
	docker-compose run exercises npm ci

code-lint:
	npx eslint modules

compose-bash:
	docker-compose run exercises bash

compose-test:
	docker-compose run exercises make test
