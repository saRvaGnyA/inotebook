const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

// schema imports
const User = require("./../models/User");

const JWTSecret = process.env.JWT_SECRET;

module.exports.signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Check whether a user with same email exists already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(400).json({ error: "Please enter unique email" });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const data = {
      user: {
        id: user.id,
      },
    };

    const authToken = jwt.sign(data, JWTSecret);

    res.json({
      success: true,
      message: "User created successfully",
      authToken,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Some internal server error occured",
    });
  }
};

module.exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(400)
        .json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    // bcrypt internally matches all the hashes, we need not hash the password and send it as an argument

    if (!passwordCompare) {
      res
        .status(400)
        .json({ error: "Please try to login with correct credentials" });
    }

    // same payload as before, and then send the JWT
    const payload = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(payload, JWTSecret);
    res.json({ authToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Some internal server error occured",
    });
  }
};
