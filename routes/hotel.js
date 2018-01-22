'use strict';

var express = require('express');
var hotelController = require('../controllers/hotel');
var api = express.Router();

// Creando las rutas de navegación.
api.post('/saveHotel' , hotelController.saveHotel);
api.get('/listHotels' , hotelController.getListHotels);
api.get('/hotel/:id' , hotelController.getHotel);
api.put('/updateHotel/:id' , hotelController.updateHotel);
api.delete('/deleteHotel/:id' , hotelController.deleteHotel);


//Exportando el router de express
module.exports = api;