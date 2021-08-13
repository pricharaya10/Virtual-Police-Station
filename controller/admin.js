const mongoose = require('mongoose')
const Admin = mongoose.model("Admin")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');



exports.signup = (req,res) =>{
    const {username,password} = req.body 
   
   
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
              const admin = new Admin({
                username,
                password : hashedpassword
              })
      
              admin.save()
              .then(admin=>{
                  res.json({message:"saved successfully"})
              })
              .catch(err=>{
                  console.log(err)
              })
        })
    .catch(err=>{
      console.log(err)
    })
}


exports.signin = (req,res)=>{
    const {username,password} = req.body
    if(!username || !password){
       return res.status(422).json({error:"please add username or password"})
    }

    Admin.findOne({username:username})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid username or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"successfully signed in"})
               const token = jwt.sign({_id:savedUser._id},'software')
            //   const {_id,name,email,followers,following,pic} = savedUser
               res.json({token,savedUser})
            }
            else{
                return res.status(422).json({error:"Invalid username or password"})
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