const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
const path = require('path')
const app = express() 
const cors = require('cors');
const portN = process.env.PORT


const routerFile = require("./route/route")
const data = require("./route/data")

app.use(cors({origin: 'http://localhost:3000', methods: ['GET', 'POST']}));

dotenv.config({path:path.join(__dirname,'config','temp.env')})

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded())

app.use(routerFile);
app.use(data);


app.use((req,res)=>{
    console.log('404 page')
    res.sendFile(path.join(__dirname,'./','view','404.hrml'))
})


app.listen(process.env.PORT,()=>{
    console.log("Seerver running",process.env.PORT)
})