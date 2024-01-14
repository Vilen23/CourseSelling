const express = require('express')
const cors = require('cors')
const {Info,Admin} = require('./Database')
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

  app.post("/adminsignup",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const existingAdmin = await Admin.findOne({username:username})
    if(existingAdmin){
        res.status(400).json({
            msg:"Admin already exists"
        })
        return
    }else{
        await Admin.create({
            username,
            password
        })
        res.status(200).json({
            msg:"Admin created"
        })
    }
  })
  app.post("/adminlogin",async(req,res)=>{
    const username = req.body.username
    const password  = req.body.password
    try {
        const existingAdmin = await Admin.findOne({username:username,password:password})
    if(existingAdmin){
        res.status(200).json({
            msg:"Admin exixts"
        })
        return
    }
    else{
        res.status(400).json({
            msg:"Admin does not exist"
        })
    }
    } catch(error){
        console.error('Error found:', error);
        res.status(500)
    }
  })

app.listen(3000)
