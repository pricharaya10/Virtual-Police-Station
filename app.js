const express = require('express');
const cors = require('cors')
const app = express()
require('dotenv').config()
const PORT = process.env.port ||  8080
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect("mongodb+srv://vps:gCik5W3FWyvlvQXy@cluster0.jbdvq.mongodb.net/VirtualPoliceStation?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
mongoose.connection.on('connected', () => {
    console.log("Connect to mongo");
})
mongoose.connection.on('error', (err) => {
    console.log(" Does not Connect to mongo",err);
})
require('./models/user')
 require('./models/admin')
 require('./models/police')
 require('./models/fir')
 require('./models/event')
 require('./models/complain')
 require('./models/aadhar')
 app.use(cors())
 app.use(express.json())
 app.use(bodyParser.json())
 app.use('/user',require('./router/user'))
 app.use('/police',require('./router/police'))
 app.use('/admin',require('./router/admin'))
 app.use('/fir',require('./router/fir'))
 app.use('/event',require('./router/event'))
 app.use('/complain',require('./router/complain'))
 app.use('/ad',require('./router/aadhar'))



if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*',(req,rse)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`)
})