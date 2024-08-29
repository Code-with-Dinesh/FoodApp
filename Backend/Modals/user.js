const mongoose = require("mongoose")
const joi = require("joi")
const userSchmea = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

function checkuserSchema(data){
    let schema = joi.object({
        name:joi.string().required(),
        email:joi.string().required(),
        password:joi.string().required(),
    })
    let error = schema.validate(data)
    return error;
}

const user = mongoose.model("user",userSchmea)
module.exports = {user,checkuserSchema}
