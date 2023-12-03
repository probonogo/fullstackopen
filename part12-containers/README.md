## Part 12. Containers

_https://fullstackopen.com/en/part12_

### a. Introduction to Containers7

- Containers and images

There are two core concepts in this part: container and image. They are easy to confuse with one another.

A container is a runtime instance of an image.

Docker create a container from an image:

```sh
docker container run IMAGE-NAME
```

Example: `$ docker container run hello-world` create and executa the container hello-world (from url: https://hub.docker.com/_/hello-world)

```sh
docker container run hello-world
# Access to ubuntu command line
docker container run -it ubuntu bash
```

- Ubuntu image

Listar containers:

```sh
docker container ls -a
# o
docker ps -a
```

Iniciar el contenedor:

```sh
docker start CONTAINER-ID-OR-CONTAINER-NAME
```

Listar solamente los contenedores que se están ejecutando:

```sh
docker container ls
```

Eliminar un contenedor:

```sh
docker kill CONTAINER-ID-OR-CONTAINER-NAME
```

### b. Building and configuring enviroments

### c. Basics of Orchestration
