DOCKER_NAMESPACE = rog
DOCKER_PROJECT = spark-communications
DOCKER_INSTANCE = $(DOCKER_PROJECT)-instance

build:
	docker build --tag $(DOCKER_NAMESPACE)/$(DOCKER_PROJECT) --file Dev_Dockerfile .

run:
	-docker kill $(DOCKER_INSTANCE)
	-docker rm $(DOCKER_INSTANCE)
	docker run \
		--name $(DOCKER_INSTANCE) \
		-v $(CURDIR)/user/:/usr/share/nginx/html/user/ \
		-p 80:80 \
		-d $(DOCKER_NAMESPACE)/$(DOCKER_PROJECT)
