const mongoose = require('mongoose')

const UsersSchema=new mongoose.Schema({
    id:String,
    firstName:String,
    lastName:String,
    email:String
})


module.exports=mongoose.model('users',UsersSchema)