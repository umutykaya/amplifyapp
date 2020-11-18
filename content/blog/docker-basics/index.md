---
title: Docker Basics
date: "2020-11-18 11:50:00"
description: "In this tutorial, I'll list most usefull docker commands."
---

In this tutorial, I'll list most usefull docker commands.


If you would like to search entity on docker hub, use <code>docker search</code>

```bash
docker search nginx
```

```bash
docker run --name my-nginx -P -d nginx
```

To get more details about container, use  <code>docker inspect </code>

```bash
docker ls -a # --all could is same.
docker inspect <container-id>
docker stop <container-id>
docker rm <container-id>
docker start <container-id>
```

To controll over image, use following commands

```
docker image ls
docker image rm <image-id>
```

### Environment Variables

First, docker pulls the  <code>ubuntu </code> image. Then, set environment variables. Thereafter, we can lookup the variable value.

```bash
docker run -e ENV_VAR1=myvalue1 ubuntu env | grep ENV_VAR
```



### Container Logs

```bash
docker container ls -a
docker logs <container-id>
```