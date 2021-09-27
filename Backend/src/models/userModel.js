const{Schema, model}=require('mongoose');

const usersDchema= new Schema({
    identificacion: {
        type: String, 
        required: true,
        trim: true,
        unique: true
    },
    login:String,
    nombres:String,
    clave:String,
    perfil:String
})

module.exports=model('userModel',usersDchema)