const express = require("express")
const route = express.Router()

module.exports = route.post("/display",function(req,res){
    try {
        res.send([global.food_item,global.foodCategory])
    } catch (error) {
        console.log("Error while Display The data",error)
    }
})