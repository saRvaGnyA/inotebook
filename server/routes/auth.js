const express = require("express");
const User = require("./../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Create a user using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
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
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.json({ success: true, message: "User created successfully", user });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, message: "Some error occured" });
    }
  }
);

module.exports = router;
