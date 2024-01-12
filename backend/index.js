const express = require('express')
const cors = require('cors')
const {Info} = require('./Database')
const {valid} = require('./Validation')
const app = express();

app.use(cors())
app.use(express.json())

app.post("/user",async (req,res)=>{
    const response = valid.safeParse(req.body)
    if(!response.success){
        res.status(400).json({
            msg:"Invalid inputs"
        })
        return
    }
    const existingUser = await Info.findOne({email:req.body.email})
    if(existingUser){
        res.status(400).json({
            msg:"email is already registered"
        })
        return
    }
    await Info.create({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    })
    res.status(200).json({
        msg:"user has been created"
    })
})

app.listen(3000)
