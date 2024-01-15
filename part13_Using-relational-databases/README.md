# fullstackopen-part13_Using-relational-databases

_https://fullstackopen.com/en/part13/using_relational_databases_with_sequelize_

## a. Using relational databases with Sequelize

1. Instalar y usar postgres usando docker:

```sh
docker run -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres
# Para saber el ID del contenedor:
docker ps
# Ejecutar el contenedor:
docker exec -it <ID> psql -U postgres postgres

# Otra alternativa de hacerlo con un comando:
docker run -d \
	--name some-postgres \
	-e POSTGRES_PASSWORD=mysecretpassword \
	-e PGDATA=/var/lib/postgresql/data/pgdata \
	-v /custom/mount:/var/lib/postgresql/data \
    -p 5432:5432
	postgres
```

2. Usar docker-compose:

```sh
cd postgres-pgadmin
docker compose up docker-compose.yml

# Eliminar el compose
docker compose down

# eliminar todos los volúmenes
# docker volume prune

# ver los logs
# docker compose logs -f

# locahost:8080
# username: superman@google.com
# passwd: 123456
# host: postgres_database
# user: postgres
# pass: 123456
```

3. Using the psql console desde la opción 1. o desde el terminal con postgres instalado en loca:

```sh
# desde la el terminal de postgres (psql), crear una tabla de nombre notes:
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    content text NOT NULL,
    important boolean,
    date time
);
# Listar las tablas existentes:
\d
\d notes
# Insertar dos registros:
insert into notes (content, important) values ('Relational databases rule the world', true);
insert into notes (content, important) values ('MongoDB is webscale', false);
# Listar el contenido de la tabla notes:
select * from notes;
```
