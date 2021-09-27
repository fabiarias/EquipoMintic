require ('dotenv').config();
const app= require('./app.js');
require('./databases.js');

async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port ' + app.get('port'));
}

main();

//app.listen(3000,()=> console.log('Server on port 3000'))