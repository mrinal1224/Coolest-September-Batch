const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require('bcrypt')


router.post("/register", async (req, res) => {
  try {
    // check if the user already exists
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      res.send({
        success: false,
        message: "The user already exists!",
      });
    }

    // if not create the user according to the User Model

    
   

    // hashing and salting

   const salt =  await bcrypt.genSalt(10)
   console.log(salt)
     const hashedPassword = bcrypt.hashSync(req.body.password, salt)

     req.body.password = hashedPassword

    // console.log(password)
    const newUser = await User(req.body);
    await newUser.save();



    res.send({
      success: true,
      message: "User Resgitered Successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
   

});

module.exports = router;
