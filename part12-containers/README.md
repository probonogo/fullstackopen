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

- More meaningful image

Create a basic Express application skeleton with [express-generator](https://expressjs.com/en/starter/generator.html):

```sh
mkdir playground
cd playground
npx express-generator
npm install
DEBUG=playground:* npm start
# browse http://localhost:3000
```

Poner todo en una imagen y ejecutarla. Crear archivo [Dockerfile](playground/Dockerfile) usando como base node:16, copiar los archivos dentro de express y ejecutarlo en `playground`:

```sh
docker build -t express-server .
# ejecutar la imagen en un contanedor:
docker run -p 3123:3000 express-server
# browse http://localhost:3123
# Apagar o quitar el docker
docker container ls
docker container kill <id>
```

- Fixing potential issues we created by copy-pasting

Mediante el archivo [.dockerignore](playground/.dockerignore) especificamos directorios y archivos que no deben de ser copiados a la imagen, tal como `node_modules` pero además habría que especificar en el archivo [Dockerfile](playground/Dockerfile) que se ejecute el compando `npm install` para generar estas dependencias:

```
FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install
CMD DEBUG=playground:* npm start
```

Pero es mejor usar `npm ci` que automáticamente elimina la carpeta `node_modules` e instala la versión exacta de los paquetes en el `paquete-lock.json`, sin alterar ningún archivo, **creando compilaciones confiables**:

```
FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci
CMD DEBUG=playground:* npm start
```

Usaremos `npm ci --only=production` para no perder tiempo instalando dependencias de desarrollo.

```sh
docker build -t express-server . && docker run -p 3123:3000 express-server
```

Kill la app: `docker container ls` y `docker container kill <id>`

- Environment variable in Dockerfile

We set an environment variable `DEBUG=playground:*` during CMD for the npm start. However, with Dockerfiles we could also use the instruction ENV to set environment variables: `ENV DEBUG=playground:*`

- Dockerfile best practices

There are 2 rules of thumb you should follow when creating images:

    - Try to create as secure of an image as possible
    - Try to create as small of an image as possible

_10 best practices for Node/Express containerization. Read those [here](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)_

One big carelessness we have left is running the application as root instead of using a user with lower privileges.

- Using Docker compose

_https://docs.docker.com/compose/compose-file/compose-file-v3/_

Usando el archivo de configuración creado [docker-compose.yml](playground/docker-compose.yml) es posible ejecutar con un comando varias tareas de dockers:

```sh
# ejecutar en este directorio el docker especificado en el archivo de conf.
docker compose up
# crear además una imagen
docker compose up --build
# ejecutar la aplicación en background
docker compose up -d
```

- Utilizing containers in development

Se pueden usar varios `yaml conf. files` en la misma carpeta, con el parámetro `-f` se puede especificar que archivo ejecutar, como este [docker-compose.dev.yml](todo-app/todo-backend/docker-compose.dev.yml):

```sh
cd todo-app/todo-backend
docker compose -f docker-compose.dev.yml up -d

# browse http://localhost:3456
# para seguir los registros:
# docker compose -f docker-compose.dev.yml logs -f
```

Ejecutar mongoDB localmente después de instalar las dependencias:

```sh
npm install
MONGO_URL=mongodb://localhost:3456/the_database npm run dev
```

- Bind mount and initializing the database

Reiniciar el `docker-compose.dev.yml` con un archivo de entrada del volumen para crear usuario, contraseña y dos entradas en la bds de mongoDB:

```sh
docker compose -f docker-compose.dev.yml down --volumes
docker compose -f docker-compose.dev.yml up
```

Sí hubirera un error de permiso de lectura: `chmod a+r mongo-init.js`

Iniciar en otra terminal la aplicación `Express` con la variable de entorno correcta para conectar con la bds iniciada en el contenedor:

```sh
MONGO_URL=mongodb://the_username:the_password@localhost:3456/the_database npm run dev

# browse http://localhost:3000/todos
```

- Persisting data with volumes

There are two distinct methods to store the data:

    - Declaring a location in your filesystem (called bind mount)
    - Letting Docker decide where to store the data (volume)

Ver [docker-compose.dev.yml](todo-app/todo-backend/docker-compose.dev.yml) sección `volumes` con las dos formas de hacer datos persistentes local o en un volumen (al final del conf. file) gestionado por docker.

- Debugging issues in containers

Por ejemplo... deseamos saber sí el siguiente contenedor está funcionando bien:

```sh
docker container run -d nginx
```

1. Revisar sí se está ejecutando: `docker container ls` y chequeamos sí se está ejecutando a su vez en el puerto 80 (en la respuesta devuelta).

2. Reiniciamos con el indicador `-p` para usar otro puerto y probar sí el navegador accede a el:

```sh
docker container stop <id>
docker container rm <id>

docker container run -d -p 8080:80 nginx
```

_Por lo general, no ejecuto contenedores en modo independiente (es decir, con `-d`), ya que requiere un poco de esfuerzo adicional para abrir los registros._

Visitarmos en el navegador para ver sí se muestra lo esperado: http://localhost:8080 (no es lo esperado por lo que podemos acceder de forma interactiva al contenedor para chequear sí todo está bien):

```sh
docker container ls
docker exec -it ID-OR-NAME bash
```

Revisamos el archivo `/usr/share/nginx/html/index.html` (mejor lo eliminamos): `rm /usr/share/nginx/html/index.html` y creamos uno nuevo `echo "Hello, exec!" > /usr/share/nginx/html/index.html`

Al eliminar el contenedor se pierden los cambios. Para mantener los cambios hay que usar volumenes persistentes: https://fullstackopen.com/en/part12/introduction_to_containers#other-docker-commands

- Redis

[Docker Hub para Redis](https://hub.docker.com/_/redis)

Configuration or Redis en `docker-compose.dev.yml`:

```yaml
redis:
  image: redis
  ports:
    - 6379:6379
```

Reiniciar docker con nueva configuración de `docker-compose.dev.yml`:

```sh
docker compose -f docker-compose.dev.yml down --volumes
docker compose -f docker-compose.dev.yml up
```

Probar sí funciona con la app local de express:

```sh
REDIS_URL=redis://localhost:6379 MONGO_URL=mongodb://the_username:the_password@localhost:3456/the_database npm run dev
```

To work with Redis The project need to has https://www.npmjs.com/package/redis installed and two functions "promisified" - getAsync and setAsync.

    - setAsync function takes in key and value, using the key to store the value.
    - getAsync function takes in key and returns the value in a promise.

- Persisting data with Redis

Para conservar los datos en el directorio **redis_data** de la máquina host, se puede modificar el archivo yaml por:

```yaml
service:
  redis:
    image: redis
    ports:
      - 6379:6379
    command: ['redis-server', '--appendonly', 'yes'] # Overwrite the CMD
    volumes: # Declare the volume
      - ./redis_data:/data
```

### c. Basics of Orchestration

- React in container

Instalar react y crear archivos estáticos html, js, css

```sh
npx create-react-app hello-front
cd hello-front
npm run build
```

Crear archivo [Dockerfile](hello-front/Dockerfile) para copiar instación de react, instalar dependencias y crear archivos estáticos de desarrollo. Crear contenedor:

```sh
docker build . -t hello-front

# Usar `bash` para verificar interior de contenedor
docker run -it hello-front bash
# ls (verifica sí están ahí las carpetas build, node_modules...)
# ls build (chequear sí está index.html,...)
# instalamos dentro del contenedor `serve` para servir archivos estáticos
npm install -g serve
serve build -n
```

Agregar los últimos dos comandos al [Dockerfile](hello-front/Dockerfile) y recrear la imagen:

```sh
docker build . -t hello-front
# ejecutar la imagen en un contenedor:
docker run -p 5001:3000 hello-front

# browse http://localhost:5001
```
