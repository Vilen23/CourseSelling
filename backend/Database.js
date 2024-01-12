const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Shivam:itsbeens0long@cluster0.ezyirm3.mongodb.net/Course")

const schema = mongoose.Schema({
    email:String,
    username:String,
    password:String
})

const Info = mongoose.model('User',schema)

module.exports={
    Info
}