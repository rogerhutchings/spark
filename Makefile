DOCKER_NAMESPACE = rog
DOCKER_PROJECT = spark-communications
DOCKER_INSTANCE = $(DOCKER_PROJECT)-instance

build:
	docker build \
		--file Dev_Dockerfile \
		--no-cache \
		--tag $(DOCKER_NAMESPACE)/$(DOCKER_PROJECT) \
		.

run:
	-docker kill $(DOCKER_INSTANCE)
	-docker rm $(DOCKER_INSTANCE)
	docker run \
		--detach \
		--name $(DOCKER_INSTANCE) \
		--publish 80:80 \
		--volume $(CURDIR)/user/:/usr/share/nginx/html/user/ \
		$(DOCKER_NAMESPACE)/$(DOCKER_PROJECT)
