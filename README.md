# API Rest en Node.js

Api rest para [almundo.com](https://almundo.com.co/) realizada con Node.js para el CRUD de hoteles almacenados.


## Tecnologías utilizadas

- [express] - Librería para trabajar con los protocolos HTTP , también ofrece un sistema de _routes_ cómodas.
- [body-parse] - Convierte a JSON cualquier tipo de dato que recibe por el body de una petición.
- [mongoDB] - Base de datos principal en donde está alojada la información.
- [mongoose] - Permite trabajar con mongoDB dentro de Node.js.
- [nodemon] - Es una especie de livereload; se encarga de volver a montar el servidor cada vez que se hace un cambio.
- [tunnel-ssl] - Hacer conexiones SSL.

Una vez descargado el repositorio, es indispensable ejecutar el comando **npm install**, para instalar y actualizar los paquetes de node utilizados.

## Antes de comenzar

Es importante que primero, tengas creada una base de datos con el nombre : `db_alMundo`. En caso de tener una base de datos con otro nombre, es importante mencionarla en la **línea 6** del archivo `index.js`. 

## Ejecución local

Este producto se puede ejecutar de manera local gracias a un montaje de servidor que nos permite hacer express

## Instalación y uso

### Levantar el servidor

```sh
npm start
```

Es importante que el servidor nos de una respuesta positiva dentro de la consola, esto es gracias a nodemon.

```js
¡La conexión fue exitosa!
El servidor está corriendo en http://localhost:5000
```

## Levantar el servidor

Ahora el servidor ya está listo y funcionando. Entonces para hacer pruebas locales, podemos hacer uso de [postman](https://www.getpostman.com/) por ejemplo; para hacer las peticiones, consultas y manipulación de datos.

### Instrucciones básicas con Postman

Crear un nuevo hotel mediante el método **POST** :

```js
http://localhost:5000/API/saveHotel

'POST' : 
- name : String
- stars : Number
- nameImage : String
- linkImage : String
- Price : Number
```

Listar los hoteles mediante el método **GET** :

```js
http://localhost:5000/API/listHotels
```

Ver un hotel en particular mediante el método **GET** :

```js
http://localhost:5000/API/hotel/id_del_hotel
```

Actualizar un hotel mediante le método **PUT** :

```js
http://localhost:5000/API/updateHotel/id_del_hotel

'PUT' : 
- name : String
- stars : Number
- nameImage : String
- linkImage : String
- Price : Number
```

Eliminar un hotel mediante le método **DELETE** :

```js
http://localhost:5000/API/deleteHotel/id_del_hotel

```