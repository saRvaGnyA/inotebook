const express = require("express");
const User = require("./../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Create a user using: POST "/api/auth". Doesn't require auth
router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
    body("email", "Enter a valid email").isEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res
          .status(400)
          .json({ error: "Please enter unique email", message: err.message });
      });
  }
);

module.exports = router;
