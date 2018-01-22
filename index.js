'use strict'; // Trabajando con ES6

var mongoose = require('mongoose'); //Cargando el módulo de conexión para mongo (mongoose)
var app = require('./app'); // Cargando módulo de express
var port = 3800; // Puerto de ejecución
var database = 'db_alMundo'; // Base de datos a la que nos vamos a conectar

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/' + database) // Haciendo la conexión con la base de datos
.then(() => {
    console.log('¡La conexión fue exitosa!')
    app.listen(port, () => {
        console.log('El servidor está corriendo en http://localhost:3800')
    })
})
.catch(err => {
    console.log('No se ha podido establecer conexión -> ' + err)
});