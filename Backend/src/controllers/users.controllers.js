const { json } = require("express");

const userCtrl={};

const usuarios= require('../models/userModel');


userCtrl.getUsers=(req,res)=>{
    res.json({message:[]})
}

userCtrl.getUsersID=(req,res)=>res.json({message:[]})

userCtrl.createUsers=(req,res)=>res.json({message:[]})

userCtrl.deleteUser=(req,res)=>res.json({message:[]})

userCtrl.updateUser=(req,res)=>res.json({message:[]})

module.exports=userCtrl;