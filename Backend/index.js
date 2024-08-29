const express = require("express")
const app = express()
const port = 5000
const connectdb = require("./db")
const {user,checkuserSchema}  = require("./Modals/user")
const createUser = require("./Routes/createuser")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/", createUser)
app.listen(port,function(){
    console.log(`App listen on port number ${port}`)
})

app.get("/",function(req,res){
    res.send("Home route")
})

connectdb()