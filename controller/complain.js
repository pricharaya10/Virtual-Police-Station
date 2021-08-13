const mongoose = require('mongoose')
const Complain = mongoose.model("Complain")


exports.getComplainById = (req, res, next, id) => {
    Complain.findById(id).exec((err, complain) => {
        if (err || !complain) {
            return res.status(400).json({
                error: "No complain  found in db"
            })
        }
        req.complain = complain;
        next()
    })
}


exports.addComplain = (req,res) => {
    const {subject , complain_against,complainant_ID} = req.body
    
    var num = () =>{
            s4 = () => {
                let characters = '1234567890';
                var charactersLength = characters.length;
                var result = ''
                for ( var i = 0; i < 4; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                 }
                 return result;
            }
            return s4( ) + '-' + s4( ) + '-' + s4()+ '-' + s4();
        }
    

    const complain = new Complain({
        subject,
        complain_against,
        complain_regtime : new Date,
        complain_num : num(),
        complainant_ID 
    })

    complain.save().then(complain=>{
        console.log(complain.complainant_ID.first_name)
        res.json({message:"saved successfully",complain})
    })
    .catch(err=>{
        console.log(err)
    })
}


exports.getAllComplain = (req,res) => {
    Complain.find().exec((err, complain) => {
        if(err){
            return res.status(400).json({
                error : "No complain to display in db"
            })
        }
        res.json(complain)
    })
}

exports.findComplainByUserId = (req,res) => {
    const id = req.user._id;
    Complain.find({complainant_ID : id}).then(complain => {
        res.json(complain)
    })
}
