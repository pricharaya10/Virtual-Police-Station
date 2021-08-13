const mongoose = require("mongoose")

const {ObjectId} = mongoose.Schema.Types

const complainSchema = new mongoose.Schema({
        complain_num : {
            type: String,
            required: true,
            unique: true
        },
        complainant_ID : {
            type: ObjectId,
            ref:"User",
            required: true,   
        },
        subject : {
            type: String,
          //  maxlength: 60,
        },
        complain_regtime : {
            type : Date,
            //required: True
        },
        complain_against:{
            type: String,
            required: true,
        }

    } , {timestamps: true} )

module.exports = mongoose.model("Complain",complainSchema)