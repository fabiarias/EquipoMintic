const userCtrl = {};
const userModel = require("../models/productosModel");
const User = require("../models/userModel");

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userCtrl.getUsersID=async(req,res)=>{
    try {
        const users = await User.findById(req.params.id);
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
}



userCtrl.createUsers=async(req,res)=>{
    try{
        const {identificacion,login,nombres,clave,email,perfil}=req.body;
        const newUser=new User({
            identificacion:identificacion,
            login:login,
            nombres:nombres,
            clave:clave,
            email:email,
            perfil:perfil
        });
        await newUser.save();
    console.log(newUser);
    res.json({message: 'Usuario Almacenado Exitosamente'})
    }catch(e){
        console.log(e)
        res.json(e.errmsg)
    }  
};

userCtrl.deleteUser=async(req,res)=>{
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('Usuario Eliminado');
}

userCtrl.updateUser=async(req,res)=>{
    const{identificacion,login,nombres,clave,email,perfil}=req.body;
    await User.findByIdAndUpdate(req.params.id,{
        identificacion:identificacion,
        login:login,
        nombres:nombres,
        clave:clave,
        email:email,
        perfil:perfil,
    });
     res.json({message: ' Usuario Actualizado Exitosamente'})
}

module.exports=userCtrl;