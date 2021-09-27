const { json } = require("express");

const facturasCTRL={};

facturasCTRL.getFacturas=(req,res)=>res.json({message:[]});

facturasCTRL.createFactura=(req,res)=>res.json({message:'Factura Almacenada'});

facturasCTRL.updateFactura=(req,res)=>res.json({message:'Factura Actualziada'})

facturasCTRL.getFacturaID=(req,res)=>res.json({titulo:'Factura'})

facturasCTRL.deleteFactura=(req,res)=>res.json({message:'Factura eliminada'})



module.exports=facturasCTRL;