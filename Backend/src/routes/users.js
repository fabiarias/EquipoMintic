const{Router}=require('express');
const router=Router();
const {getUsers,createUsers,deleteUser,updateUser,getUsersID}=require('../controllers/users.controllers');


router.route('/')
   //.get((req,res)=>res.send('users Routes'))
   // .post((re,res),=> res.send('POST- UUsers Routes'))
   // .get((req,res)=>res.json({message:'GET users Routes'}))
   // .post((re,res)=> res.json({message:'POST- UUsers Routes'}))


    .get(getUsers)
    .post(createUsers)

router.route('/:id')
    .delete(deleteUser)
    .put(updateUser)
    .get(getUsersID)
   

module.exports=router;