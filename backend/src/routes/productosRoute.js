const{Router}=require('express');
const router=Router();

const {getProductos,createProductos,deleteProductos,updateProductos,getProductosID}=require('../controllers/productos.controllers');


router.route('/')
    .get(getProductos)
    .post(createProductos)

router.route('/:id')
    .get(getProductosID)
    .delete(deleteProductos)
    .put(updateProductos)
  
module.exports=router;