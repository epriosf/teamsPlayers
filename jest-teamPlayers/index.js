if(process.env.NODE_ENV==='development'){
    require('dotenv').config();
}
console.log(process.env.NODE_ENV);