'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;


/**
 * Modelo o plantilla para la manipulación (CRUD) de la info en la base de datos.
 */
var hotelSchema = schema ({
    name    : String,
    stars   : Number,
    images  : [
        {
            nameImage : String,
            linkImage : String,
        }
    ],
    price   : Number,
});

module.exports = mongoose.model('Hotel' , hotelSchema); // Genera el modelo, bajo la entidad 'Hotel'