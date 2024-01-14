const express = require('express')
const cors = require('cors')
const {Info} = require('./Database')
const {valid} = require('./Validation')
const app = express();
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

app.post("/signup",async (req,res)=>{
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

app.post("/signinuser", async (req, res) => {
    const { username, password } = req.body;
  
    try {
        const existingUser = await Info.findOne({ username: username, password: password });
  
      if (existingUser) {
        res.status(200).json({
          msg: "User exists"
        });
      } else {
        res.status(400).json({
          msg: "User not found"
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({
        msg: "Internal Server Error"
      });
    }
  });

app.listen(3000)
