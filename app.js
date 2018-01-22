'use strict'; // Trabajando con ES6

var express = require('express'); // Se encarga de tener el servidor en lìnea y recibir peticiones HTTP
var bodyparser = require('body-parser'); // Todo lo que recibe lo convierte en JSON legible


var app = express();
var hotel_routes = require('./routes/hotel'); // Cargando el manejador de rutas


// Body parser
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());


// rutas base
app.use('/API' , hotel_routes);

module.exports = app;