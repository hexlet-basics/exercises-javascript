-include /opt/basics/common/common.mk

compose-setup: compose-build compose-install

compose:
	docker-compose up

compose-build:
	docker-compose build

compose-down:
	docker-compose down -v --remove-orphans

compose-install:
	docker-compose run --rm exercises npm ci

code-lint:
	npx eslint modules

compose-bash:
	docker-compose run --rm exercises bash

compose-test:
	docker-compose run --rm exercises make test

compose-description-lint:
	docker-compose run --rm exercises make description-lint

compose-schema-validate:
	docker-compose run --rm exercises make schema-validate

ci-check:
	docker-compose --file docker-compose.yml build
	docker-compose --file docker-compose.yml up --abort-on-container-exit

docker-build-original:
	docker buildx build -t hexletbasics/exercises-javascript .

docker-push-original:
	docker push hexletbasics/exercises-javascript
