const express = require("express")
const app = express()
const port = 5000
const connectdb = require("./db")
app.listen(port,function(){
    console.log(`App listen on port number ${port}`)
})

app.get("/",function(req,res){
    res.send("Home route")
})

connectdb()