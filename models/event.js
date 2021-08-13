const mongoose = require("mongoose")

const {ObjectId} = mongoose.Schema.Types

const eventSchema = new mongoose.Schema({
        event_app_num : {
            type: String,
            required: true,
            unique: true
        },
        applicant_ID : {
            type: ObjectId,
            required: true, 
            ref:"User"
        },
        event_name:{
            type: String,
            required: true,
        },
        subject : {
            type: String,
            required: true,
        },
        start_date : {
            type : String,
            required: true
        },
        end_date : {
            type : String,
            required: true
        },
        start_time : {
            type : String,
            required: true
        },
        place:{
            type: String,
            required: true,
        },
        people_count:{
            type: Number,
            required: true,
        },
        permission:{
            type : Boolean,
            default : false
        }

    } , {timestamps: true} )

module.exports = mongoose.model("Event",eventSchema)