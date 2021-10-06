const{Router}=require('express');
const router=Router();

const {getFacturas,createFactura,deleteFactura,updateFactura,getFacturaID}=require('../controllers/facturas.controllers');

router.route('/')
    .get(getFacturas)
    .post(createFactura)

router.route('/:id')
    .delete(deleteFactura)
    .put(updateFactura)
    .get(getFacturaID)

module.exports=router;