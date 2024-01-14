const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Shivam:itsbeens0long@cluster0.ezyirm3.mongodb.net/Course")

const Userschema = mongoose.Schema({
    email:String,
    username:String,
    password:String
})

const AdminSchema = mongoose.Schema({
    username:String,
    password:String
})

const Info = mongoose.model('User',Userschema)
const Admin = mongoose.model('Admin',AdminSchema)

module.exports={
    Info,
    Admin
}