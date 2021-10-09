const{Schema, model}=require('mongoose');

const facturasSchema= new Schema({
    idfactura: {
        type: String, 
        required: true,
        trim: true,
        unique: true
    },
    fecha:Date,
    identificacion:String,
    nombre:String,
    direccion:String,
    telefono:String,
    idproducto:String,
    vendedor:String,
    cantidad:Number,
    precio:Number  
})

module.exports= model('Facturas',facturasSchema );