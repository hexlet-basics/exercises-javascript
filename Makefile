-include common/Makefile

compose:
	docker-compose up

compose-setup: compose-build compose-install

compose-install:
	docker-compose run exercises npm install

code-lint:
	npx eslint modules
