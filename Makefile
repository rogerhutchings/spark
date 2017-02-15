DOCKER_NAMESPACE = rog
DOCKER_PROJECT = spark-communications

local:
	php -S localhost:8000 system/router.php

docker:
	docker build -t $(DOCKER_NAMESPACE)/$(DOCKER_PROJECT) .
	docker run --name $(DOCKER_PROJECT)-instance -p 80:80 -d $(DOCKER_NAMESPACE)/$(DOCKER_PROJECT)
