const{Router}=require('express');
const router=Router();

const {getUsers,createUsers,deleteUser,updateUser,getUsersID}=require('../controllers/users.controllers');


router.route('/')
    .get(getUsers)
    .post(createUsers)

router.route('/:id')
    .get(getUsersID)
    .delete(deleteUser)
    .put(updateUser)
  
module.exports=router;