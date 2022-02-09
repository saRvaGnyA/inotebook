const express = require("express");

// middleware imports
const {
  signUpValidationRules,
  loginValidationRules,
  validate,
  fetchUser,
} = require("./../middleware/validator");

// controller imports
const { signUp, login, getUser } = require("./../controllers/controller-auth");

const router = express.Router();

// Route 1: Create a user using: POST "/api/auth/createuser". No login required
router.post("/createuser", signUpValidationRules(), validate, signUp);

// Route 2: Authenticate a user using: POST "/api/auth/login". No login required
router.post("/login", loginValidationRules(), validate, login);

// Route 3: Get the logged in user's details using: POST "/api/auth/getuser". Login required
router.post("/getuser", fetchUser, getUser);

module.exports = router;
