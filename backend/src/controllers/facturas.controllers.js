const facturasCTRL = {};
const Facturas = require("../models/facturasModel");

facturasCTRL.getFacturas=async (req, res) => {
    try {
        const facturas = await Facturas.find();
        res.json(facturas);
        console.log(facturas);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

facturasCTRL.createFactura=async(req,res)=>{
    try{
        const {idfactura,fecha,identificacion,nombre,direccion,telefono,idproducto,cantidad,precio,vendedor}=req.body;
        const newFactura=new Facturas({
            idfactura:idfactura,
            fecha:fecha,
            identificacion:identificacion,
            nombre:nombre,
            direccion:direccion,
            telefono:telefono,
            idproducto:idproducto,
            cantidad:cantidad,
            precio:precio,
            vendedor:vendedor,
        });
        await newFactura.save();
    console.log(newFactura);
    res.json({message: 'Producto Almacenado Exitosamente'})
    }catch(e){
        console.log(e)
        res.json(e.errmsg)
    }  
};



facturasCTRL.updateFactura=async(req,res)=>{
    const{idfactura,fecha,identificacion,nombre,direccion,telefono,idproducto,cantidad,precio,vendedor}=req.body;
    await Facturas.findByIdAndUpdate(req.params.id,{
        idfactura:idfactura,
        fecha:fecha,
        identificacion:identificacion,
        nombre:nombre,
        direccion:direccion,
        telefono:telefono,
        idproducto:idproducto,
        cantidad:cantidad,
        precio:precio,
        vendedor:vendedor,
        
    });
     res.json({message: ' Factura Actualizada Exitosamente'})
};

facturasCTRL.getFacturaID=async(req,res)=>{
    try {
        const facturas = await Facturas.findById(req.params.id);
        res.json(facturas);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

facturasCTRL.deleteFactura=async(req,res)=>{
    const { id } = req.params;
    await Facturas.findByIdAndDelete(id);
    res.json('Factura Eliminada');
};

module.exports=facturasCTRL;