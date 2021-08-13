const mongoose = require('mongoose')
const Aadhar = mongoose.model("Aadhar")


exports.add = (req,res) =>{
    const {first_name , last_name , aadhar_no , email} = req.body

    const aadhar = new Aadhar({
        first_name , last_name , aadhar_no , email
    })
    aadhar.save().then(ad => {
        return res.json({msg : "Succes"})
    }).catch(err => {
        console.log(err)
    })
}

