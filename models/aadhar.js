const mongoose = require('mongoose')

const aadharSchema = new mongoose.Schema({
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
    aadhar_no:{
        type: String,
        required : true
    }
})

module.exports =  mongoose.model("Aadhar",aadharSchema)