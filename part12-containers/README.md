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

- Other Docker commands

Crear una nueva imagen de una existente (modificada)

```sh
docker commit CONTAINER-ID-OR-CONTAINER-NAME NEW-IMAGE-NAME
```

Listar las imágenes:

```sh
docker image ls
```

Usar imagen de node `https://hub.docker.com/_/node`, crear archivo local y copiarlo dentro del contenedor:

```sh
echo "console.log('Hello, World')" > index.js
docker container run -it --name hello-node node:16 bash
mkdir /usr/src/app
# Desde otra terminal sin cerrar el acceso bash
docker container cp ./index.js hello-node:/usr/src/app/index.js
```

### b. Building and configuring enviroments

- Dockerfile

Crear una imagen con nombre fs-hello-world usando las instrucciones de [Dockerfile](Dockerfile) que se encuentra en el actual directorio `.`.

```sh
docker build -t fs-hello-world .
```

Ejecutar la nueva imagen (ver imagen creada: `docker image ls`):

```sh
docker run fs-hello-world
```

Ejecutar la imagen abriendo el bash y no el comando por defecto `CMD node index.js`:

```sh
docker run -it fs-hello-world bash
```

### c. Basics of Orchestration
