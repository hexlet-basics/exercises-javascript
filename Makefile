-include /opt/basics/common/common.mk

compose:
	docker-compose up

compose-setup: compose-build compose-install

compose-build:
	docker-compose build

compose-install:
	docker-compose run exercises npm ci

code-lint:
	npx eslint modules
