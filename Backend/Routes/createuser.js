const express = require("express")
const route = express.Router()
const {user,checkuserSchema} = require("../Modals/user")
module.exports =  route.post("/create",async function(req,res){
    const data = await user.create({
        name:"Dishant",
        email:"dinesh@gmail.com",
        password:"qwerty"
    })
    res.json({success:true})
})