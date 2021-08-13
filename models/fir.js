const mongoose = require("mongoose")

const {ObjectId} = mongoose.Schema.Types

const firSchema = new mongoose.Schema({
        fir_num : {
            type: String,
            required: true,
            unique: true
        },
        complainant_fname : {
            type: String,
            
        },
        complainant_lname : {
            type: String,
        },
        complainant_ID : {
            type: ObjectId,
            ref : "User"
        },
        subject : {
            type: String,
            
        },
        fir_regtime : {
            type : Date,
            required: true
        },
        fir_closedtime : {
            type : Date
        },
        progress_details : [
            {  
            type: String           
        }],
        details : 
            {  
            type: String,    
            },
        police_ID : {
            type: ObjectId,
            ref: "Police" 
        }

    } , {timestamps: true} )

module.exports = mongoose.model("Fir",firSchema)