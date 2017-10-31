# Auto-documented makefile from https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html

.DEFAULT_GOAL := help
.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

build: ## Rebuild the development Docker image
	@docker-compose build

full-build: ## Rebuild the development Docker image from scratch
	@docker-compose build --no-cache

run: ## Run the development Docker image
	@docker-compose up

terminal: ## Create a terminal in the running development Docker container
	@docker exec -i -t sparkgh_web_1 /bin/bash

update-content: ## Pass in a Grav zip backup, and update the user dir with any changes. Requires `SRC=path_to_zipfile`
	@rm -rf .tmp
	@mkdir .tmp
	@echo 'Unzipping backup...'
	@unzip -q $$SRC -d .tmp
	@echo 'Copying newer files...'
	@rsync --update -raz --progress .tmp/user .
	@echo 'Cleaning up...'
	@rm -r .tmp
	@echo 'Finished.'
