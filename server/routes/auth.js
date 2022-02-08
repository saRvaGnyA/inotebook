const express = require("express");
require("dotenv").config();

// middleware imports
const {
  signUpValidationRules,
  loginValidationRules,
  validate,
} = require("./../middleware/validator");

// controller imports
const { signUp, login } = require("./../controllers/controller-auth");

const router = express.Router();
const JWTSecret = process.env.JWT_SECRET;

// Route 1: Create a user using: POST "/api/auth/createuser". No login required
router.post("/createuser", signUpValidationRules(), validate, signUp);

// Route 2: Authenticate a user using: POST "/api/auth/login". No login required
router.post("/login", loginValidationRules(), validate, login);

module.exports = router;
