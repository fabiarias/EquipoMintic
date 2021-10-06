const mongoose=require('mongoose');

//const URI='mongodb://localhost/mintech';
const URI=process.env.MONGODB_URI ? 
process.env.MONGODB_URI : 
'mongodb://localhost/mintech';

mongoose.connect(URI,{
    useNewUrlParser:true,
    //useFindAndModify:false
    //useCreateIndex:true
    //ignoreUndefined:true,
    //rejectUnauthorized:true
});

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log('DB is Connected');
});