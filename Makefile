compose-setup: compose-build compose-install
compose:
	docker-compose up

gcloud-builds-submit:
	gcloud builds submit --config cloudbuild.yaml .

compose-test:
	docker-compose run exercises make test

compose-lint:
	docker-compose run exercises make lint

compose-install:
	docker-compose run exercises npm install

compose-bash:
	docker-compose run exercises bash

compose-build:
	docker-compose build

docker-release: docker-build docker-push

SUBDIRS := $(wildcard modules/**/*/.)

lint:
	yamllint modules

test: $(SUBDIRS)
$(SUBDIRS):
	@echo
	# npm run test -s -- $@
	make test -C $@
	@echo

.PHONY: all $(SUBDIRS)
