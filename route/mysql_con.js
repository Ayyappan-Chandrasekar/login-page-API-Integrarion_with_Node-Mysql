const mysql = require("mysql2");
const dotenv = require('dotenv');
const path = require('path');


dotenv.config({path: path.join(__dirname,'../', 'config', 'temp.env')})

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

con.connect(err=>{
    if (err){
        console.error("SQL Connection failed");
        process.exit(1);
    }else{
        console.log("sql connection succesfully")
    }
})

module.exports = con