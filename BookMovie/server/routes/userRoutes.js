const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

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

    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    req.body.password = hashedPassword;

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
  try {
    const user = await User.findOne({ email: req.body.email });

    console.log(user);

    if (!user) {
      res.send({
        success: false,
        message: "user does not exist Please Register",
      });
    }

    // validate password

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(401).send({
        success: false,
        message: "Sorry, invalid password entered!",
      });
    }

    const jwtToken = jwt.sign({ userId: user._id }, "scaler_movies", {
      expiresIn: "2d",
    });

    res.send({
      success: true,
      message: "You've successfully logged in!",
      token: jwtToken,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/get-valid-user", authMiddleware, async (req, res) => {
  const validUser = await User.findById(req.body.userId).select("-password");

  res.send({
    success: true,
    message: "You are authorized to go to the protected route!",
    data: validUser,
  });
});

module.exports = router;
