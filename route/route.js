const express = require("express");
const path = require('path')

const router = express.Router();


router.get('/product',(req,res,next)=>{
    res.send('<h1>Add product</h1><form action="product-list" method="post"><input type="text" name="title"></input><button type="submit">Submit</button></form>')
})

router.post('/product-list',(req,res)=>{
    console.log("form data",req.body)
    res.send('<h3>data</h3>').json(res.body)
})

router.use((req,res,next)=>{
    console.log("Login page")
    res.sendFile(path.join(__dirname,'../','view',"login.html"))
})

module.exports = router;


