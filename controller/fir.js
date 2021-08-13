const mongoose = require('mongoose')
const Fir = mongoose.model("Fir")
const Police = mongoose.model("Police")
const User = mongoose.model("User")
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')


const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.API_KEY
    }
}))

exports.getFirById = (req, res, next, id) => {
    Fir.findById(id).exec((err, fir) => {
        if (err || !fir) {
            return res.status(400).json({
                error: "No fir  found in db"
            })
        }
        req.fir = fir;
        next()
    })
}


// exports.addFir = (req,res) => {
//     const {subject } = req.body
    
//     var num = () =>{
//             s4 = () => {
//                 let characters = '1234567890';
//                 var charactersLength = characters.length;
//                 var result = ''
//                 for ( var i = 0; i < 4; i++ ) {
//                     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//                  }
//                  return result;
//             }
//             return s4( ) + '-' + s4( ) + '-' + s4()+ '-' + s4();
//         }
    

//     const fir = new Fir({
//          subject,
//         fir_num : num(),
//         fir_regtime : new Date(),
//         complainant_ID : req.user
//     })

//     fir.save().then(fir=>{
//         console.log(fir)
//         Police.find().sort({fir_count : 1}).limit(1).then(pp =>
//             {
//                 console.log(pp[0],123)
//                 Police.findByIdAndUpdate(pp[0]._id , {$push :{alloted_fir : fir._id }, $set : {fir_count : pp[0].fir_count+1}}, { new: true }).then(result => {
//                     transporter.sendMail({
//                         to:`${result.name} <${result.email}>`,
//                         from:"bansaly37@gmail.com",
//                         subject:"signup success",
//                         html:"<h1>welcome to instagram</h1>"
//                     })
                    
//                 })

//             }
//             ).catch(err => console.log(err))

//         console.log(fir.complainant_ID.first_name)
//         res.json({message:"saved successfully",fir})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// }


exports.getAllFirs = (req,res) => {
    Fir.find().exec((err, fir) => {
        if(err){
            return res.status(400).json({
                error : "Not fir to display in db"
            })
        }
        res.json(fir)
    })
}

exports.findFirByUserId = (req,res) => {
    const id = req.body.complainant_ID;
    Fir.find({complainant_ID : id}).then(fir => {
        console.log(fir)
       return res.json(fir)
    })
}

exports.countFirByUserId = (req,res) => {
    const id = req.body.id;
    Fir.find({complainant_ID : id}).then(fir => {
        console.log(fir)
       return res.json(fir.length)
    })
}

exports.countTotal = (req,res) => {
    const id = req.body.complainant_ID;
    Fir.find().then(fir => {
        console.log(fir)
       return res.json(fir.length)
    })
}

exports.addFir = (req,res) => {
    const {subject,complainant_ID } = req.body
    
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
        Police.find().sort({fir_count : 1}).limit(1).then(pp => {
                 // console.log(typeof(pp),234)   
                  allot_to = pp[0];
                 // console.log(allot_to)
        

        console.log(allot_to)
    const fir = new Fir({
         subject,
        fir_num : num(),
        fir_regtime : new Date(),
        complainant_ID ,
        police_ID : allot_to._id
    })

    fir.save().then(fir=>{
           // console.log(fir)
               
                User.findById(complainant_ID).then(res => {
                    transporter.sendMail({
                        to:`${res.first_name} <${res.email}>`,
                        from:"7kaustub7@gmail.com",
                        subject:" Successful Registered",
                        html:"<h1> Fir is Successfully Registered.</h1>"
                   
                })})

             //   console.log(allot_to,123)
                Police.findByIdAndUpdate(allot_to._id , {$push :{alloted_fir : fir._id }, $set : {fir_count : allot_to.fir_count+1}}, { new: true }).then(result => {
                    transporter.sendMail({
                        to:`${result.first_name} <${result.email}>`,
                        from:"7kaustub7@gmail.com",
                        subject:" Successful Registered",
                        html:"<h1>There is a Fir alloted to you.</h1>"
                    }).then(
                        console.log("sent")
                    )
                    //console.log(result)
                }).catch(err => console.log(err))
                
       // console.log(fir.complainant_ID.first_name)
     return   res.json({message:"saved successfully",fir})

    
            })    
    .catch(err=>{
        console.log(err)
    })
})
}

exports.addProgress = (req,res) => {
    const { fir_num , detail } = req.body
    console.log(detail)
Fir.findOneAndUpdate({fir_num }, {$push : {progress_details : detail}}, {new : true}).then(result => {
    return res.json({msg : "Successfully added"})
})
}
