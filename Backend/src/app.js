const express = require ('express');
const cors=require('cors');
const app=express();

//SETTINGS
app.set('port',process.env.PORT || 4000);

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
//app.get('/api/users',(req,res)=>res.send('Users Routes'))
//app.get('/api/facturas',(req,res)=>res.send('Facturas Routes'))
app.use('/api/users',require('./routes/users'))
app.use('/api/facturas', require('./routes/facturas'))

module.exports=app;