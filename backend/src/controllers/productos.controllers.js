const productosCTRL = {};
const productosModel = require("../models/productosModel");
const Productos = require("../models/productosModel");

productosCTRL.getProductos = async (req, res) => {
    try {
        const productos = await Productos.find();
        res.json(productos);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

productosCTRL.getProductosID=async(req,res)=>{
    try {
        const productos = await Productos.findById(req.params.id);
        res.json(productos);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

productosCTRL.createProductos=async(req,res)=>{
    try{
        const {idproducto,nombreProducto,costo}=req.body;
        const newProducto=new Productos({
            idproducto:idproducto,
            nombreProducto:nombreProducto,
            costo:costo,
        });
        await newProducto.save();
    console.log(newProducto);
    res.json({message: 'Producto Almacenado Exitosamente'})
    }catch(e){
        console.log(e)
        res.json(e.errmsg)
    }  
};

productosCTRL.deleteProductos=async(req,res)=>{
    const { id } = req.params;
    await Productos.findByIdAndDelete(id);
    res.json('Producto Eliminado');
};

productosCTRL.updateProductos=async(req,res)=>{
    const{idproducto,nombreProducto,costo}=req.body;
    await productosModel.findByIdAndUpdate(req.params.id,{
        idproducto:idproducto,
        nombreProducto:nombreProducto,
        costo:costo,
        
    });
     res.json({message: ' Producto Actualizado Exitosamente'})
};



module.exports=productosCTRL;