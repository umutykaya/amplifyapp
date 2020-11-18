---
title: Creating Docker Image
date: "2020-11-18 13:58:00"
description: "In this article, I'll tell about how to create your own docker images."
---

In order to make our own image, we are using <code>Dockerfile</code>

```bash
cat > Dockerfile <<EOF
heredoc> FROM busybox
heredoc> CMD echo "Hello world! This is my first Docker image."
heredoc> EOF
```

```bash
docker build -t first-container .
docker image ls
docker run first-container
```

### Ubuntu Nginx Image

As shown in the below prompt, the  <code>Dockerfile</code> that we are using to execute  <code>Ubuntu</code> image.

```dockerfile
FROM ubuntu:latest
RUN DEBIAN_FRONTEND=noninteractive apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get -yq install net-tools nginx
EXPOSE 80
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
```

Then we're building and running it.

* -d: running docker container background.
* -p: port mappings <code>host-port:container-port</code>

```bash
docker build -t my-nginx .
docker image ls
docker run -d -p 8888:80 my-nginx
```