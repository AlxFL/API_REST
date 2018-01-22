'use strict';

var Hotel = require ('../models/hotel');


/**
 * Almacena un hotel en la base de datos
 * ----------------------------------------------------------------------
 * @param {any} req : request
 * @param {any} res : response
 */
function saveHotel (req , res){
    var hotel = new Hotel();
    var params = req.body;

    if(params.name){

        hotel.name = params.name;
        hotel.stars = params.stars;
        hotel.images = [{nameImage : params.nameImage , linkImage : params.linkImage}];
        hotel.price = params.price;

        hotel.save((err, hotelStored)=> {
            if(err){
                res.status(500).send({
                    message : 'Error en el servidor => ' + err
                });
            }
            else 
            {
                if(hotelStored){
                    res.status(200).send({
                        hotel : hotelStored
                    })
                } 
                else
                {
                    res.status(200).send({
                        message : 'No se ha guardado el hotel'
                    })
                }
            }
        })

    }
    else 
    {
        res.status(200).send({
            message : 'Poner todos los campos.'
        })
    }
};


/**
 * Obtiene el listado de todos los hoteles en la base de datos
 * ----------------------------------------------------------------------
 * @param {any} req : request
 * @param {any} res : response
 */
function getListHotels (req , res) {
    Hotel.find({}).exec((err , listHotels) => {
        if(err){
            res.status(500).send({
                message : 'Error en el servidor.'
            });
        } else
        {
            if(listHotels){
                res.status(200).send({
                    listHotels
                });
            } else
            {
                res.status(404).send({
                    message : 'No hay hoteles almacenados.'
                });
            }
        }
    })
}

/**
 * Devuelve un hotel cuando se ingresa su id como parámetro de búsqueda
 * ----------------------------------------------------------------------
 * @param {any} req : request
 * @param {any} res : response
 */
function getHotel (req , res) {
    var idHotel = req.params.id;
    Hotel.findById(idHotel).exec((err, hotel)=> {
        if(err){
            res.status(500).send({
                message : 'Error en el servidor.'
            });
        } else
        {
            if(hotel){
                res.status(200).send({
                    hotel
                });
            } else
            {
                res.status(404).send({
                    message : 'No existe el hotel.'
                });
            }
        }
    })
}

/**
 * Actualiza un hotel de acuerdo al id que se ingrese.
 * ----------------------------------------------------
 * @param {any} req : request
 * @param {any} res : response
 */
function updateHotel (req , res) {
    var idHotel = req.params.id;
    var update = req.body;
    Hotel.findByIdAndUpdate(idHotel , update , {new : true} , (err, hotelUpdated) => {
        if(err){
            res.status(500).send({
                message : 'Error en el servidor.'
            });
        } else
        {
            if(hotelUpdated){
                res.status(200).send({
                    hotel : hotelUpdated
                });
            } else
            {
                res.status(404).send({
                    message : 'No existe el hotel.'
                });
            }
        }
    });
}

/**
 * Elimina un hotel de acuerdo al id que se ingrese.
 * ----------------------------------------------------
 * @param {any} req : request
 * @param {any} res : response
 */
function deleteHotel (req , res) {
    var idHotel = req.params.id;
    Hotel.findByIdAndRemove(idHotel , (err, hotelRemoved) => {
        if(err){
            res.status(500).send({
                message : 'Error en el servidor.'
            });
        } else
        {
            if(hotelRemoved){
                res.status(200).send({
                    hotel : hotelRemoved
                });
            } else
            {
                res.status(404).send({
                    message : 'No existe el hotel.'
                });
            }
        }
    });
}

//Exportando las funciones
module.exports = {
    saveHotel,
    getListHotels,
    getHotel,
    updateHotel,
    deleteHotel
};