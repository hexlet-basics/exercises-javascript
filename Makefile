compose-test:
	docker-compose run javascript make test -s

compose-install:
	docker-compose run javascript composer install

compose-bash:
	docker-compose run javascript bash

compose-build:
	docker-compose build

docker-release: docker-build docker-push

docker-build:
	docker build -t hexlet/hexlet-basics-exercises-javascript .

docker-push:
	docker push hexlet/hexlet-basics-exercises-javascript

SUBDIRS := $(wildcard modules/**/*/.)

lint:
	yamllint modules

test: $(SUBDIRS)
$(SUBDIRS):
	@echo
	make -C $@ test
	@echo

.PHONY: all $(SUBDIRS)
