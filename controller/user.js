const mongoose = require('mongoose')
const User = mongoose.model("User")
const Aadhar = mongoose.model("Aadhar")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport');
const user = require('../models/user');

require('dotenv').config()

const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key: process.env.API_KEY
    }
}))


exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No User  found in db"
            })
        }
        req.user = user;
        next()
    })
}


exports.getUser = (req, res) => {
    const id = req.body.id
    console.log(id,1234)
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No User  found in db"
            })
        }
        console.log(user,123)
       return res.json({user})
    })
}

exports.signup = (req,res) =>{
    const {first_name,last_name,age,email,contact,photo,aadhar_no,address,password} = req.body 
    if(!email || !password || !first_name || !age || !contact || !aadhar_no || !address) {
     res.status(422).json({error:"please add all the fields"})
     return
    }
   
    
    if(password.length < 6){
        return res.json({error : "Password must be of length 6 or more"})
    }

   user.findOne({email}).then(us => {
       console.log(us)
       if(us){
        return res.json({error  : "This email is already registered"})
       }
   

    Aadhar.findOne({aadhar_no}).then(ad => {
        console.log(ad)
        if(!ad){
           return res.json({error  : "Please enter valid aadhar card no"})
        }

        bcrypt.hash(password,12)
        .then(hashedpassword=>{
              const user = new User({
                first_name,
                last_name,
                age,
                email,
                contact,
                photo,
                aadhar_no,
                address,
                password : hashedpassword
              })
      
              user.save()
              .then(user=>{
                  transporter.sendMail({
                      to:`${user.first_name} <${user.email}>`,
                      from : "7kaustub7@gmail.com",
                      subject:"signup success",
                      html:"<h1>welcome to virtual Police station</h1>"
                  }).then(() => {
                    console.log("sent")
                
                  res.json({message:"saved successfully"})
                  })
              })
              .catch(err=>{
                  console.log(err)
              })
        })
    .catch(err=>{
      console.log(err)
    })

})
})

}

exports.signin = (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"successfully signed in"})
               const token = jwt.sign({_id:savedUser._id},'software')
            //   const {_id,name,email,followers,following,pic} = savedUser
            
            res.cookie("token", token, {expire : new Date() +9999})
               res.json({token,savedUser})
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
}


exports.signout = (req,res)=>{
    res.clearCookie("token")
    res.send({ message : "User signout Successfully"})
}

exports.getAllUsers = (req,res) => {
    User.find().exec((err, user) => {
        if(err){
            return res.status(400).json({
                error : "Not user to display in db"
            })
        }
        res.json(user)
    })
}

exports.updateUser = (req,res) =>{
    const {_id,first_name,last_name,age,email,contact,photo,aadhar_no,address} = req.body 
    
   console.log(_id)
     
    User.findByIdAndUpdate(_id, { $set: { first_name,last_name,age,email,contact,photo,aadhar_no,address   }, },{new : true},
        (err, result) => {
            if (err) {
                console.log(err)
                return res.status(422).json({ error: "Updation Failed" })
            }
            res.json({ result, message: "Updation done " })
        })

}
