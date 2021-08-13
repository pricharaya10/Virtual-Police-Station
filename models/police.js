const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema.Types

const policeSchema = new mongoose.Schema({
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
    identity_no:{
        type: String,
        required : true
    },
    alloted_fir:[
        {
            type:ObjectId,
            ref:"Fir"
        }
    ],
    fir_count:{
       type: Number,
       default : 0
    },
    password : {
        type: String,
        required : true
    }
})

module.exports =  mongoose.model("Police",policeSchema)