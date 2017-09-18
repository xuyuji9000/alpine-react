IMAGE_NAME=node-img
build:
	docker build -t $(IMAGE_NAME) .
run:
	docker run --name node-ctr -p 80:8080 -d $(IMAGE_NAME)

clean:
	docker rm -f $(shell docker ps -aq)
