const mongoose=require('mongoose');

//const URI='mongodb://localhost/mintech';
const URI=process.env.MONGODB_URI;

mongoose.connect(URI,{
    ignoreUndefined:true,
    rejectUnauthorized:true
});

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log('DB is Connected');
});