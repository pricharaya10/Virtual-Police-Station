const jwt = require('jsonwebtoken')
//const {JWT_SECRET} =  require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")


exports.isUser = (req,res,next) => {
    const {authorization} = req.headers
    if(!authorization){
        res.status(401).json({error : "You must sign in"})
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, 'software',(err,payload) => {
        if(err){
          return  res.status(401).json({error:"You must sign in"})
        }
        const {_id} = payload;
        User.findById(_id).then(userdata=>{
            req.user = userdata
            next()
        })      
    })
}