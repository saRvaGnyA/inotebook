const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWTSecret = process.env.JWT_SECRET;

module.exports.signUpValidationRules = () => {
  return [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
    body("email", "Enter a valid email").isEmail(),
  ];
};

module.exports.loginValidationRules = () => {
  return [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ];
};

module.exports.validate = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports.fetchUser = (req, res, next) => {
  // get user from the JWT auth token and add the user ID to the request
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send("Access denied, invalid token");
  }
  try {
    const data = jwt.verify(token, JWTSecret);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send("Access denied, token cannot be identified");
  }
};

module.exports.noteCreationValidationRules = () => {
  return [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ];
};
