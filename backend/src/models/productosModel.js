const{Schema, model}=require('mongoose');

const productosSchema= new Schema({
    idproducto: {
        type: String, 
        required: true,
        trim: true,
        unique: true
    },
    nombreProducto:String,
    costo:Number  
})

module.exports= model('Productos',productosSchema );