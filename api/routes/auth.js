const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//REGISTER
router.post("/register", async(req,res) => {
    try {
        const salt= await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPass
    })
    const user = await newUser.save();   // to save  the user in the database  
    res.status(200).json(user);          // 200 MEANS SUCCESFUL SO I AM SENDING THE USER 
    }catch(err) {
        res.status(500).json(err); // 500 is an errorwhich wil check for  express and mongoose errors
    }
});

//LOGIN
router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
          return res.status(400).json("Wrong Credentials!");
        }
    
        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) {
          return res.status(400).json("Wrong Password!");
        }
        const {password, ...others} = user._doc;   // done  this so as the password would not get sent to the postman or the server

        return res.status(200).json(others);

   }
   catch(err){
      res.status(500).json(err);
   }
});

module.exports = router