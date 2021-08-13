const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name : {
        type: String,
        required : true
    },
    last_name : {
        type: String
    },
    email : {
        type: String,
        required : true
    },
    age : {
        type: Number,
        required : true
    },
    contact : {
        type: String,
        required : true
    },
    photo:{
        type: String
    },
    aadhar_no:{
        type: String,
        required : true
    },
    address:{
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    }
})

module.exports =  mongoose.model("User",userSchema)