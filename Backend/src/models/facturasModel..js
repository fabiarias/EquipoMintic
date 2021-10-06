const{Schema, model}=require('mongoose');

const facturaSchema =new Schema({
    idfactura: String,
    identificacion: String,
    nombre: String,
    direccion: String,
    telefono: String,
    valor: valor
});

module.exports= model('facturaModel',facturaSchema );