const { body, validationResult } = require("express-validator");

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
  return next();
};
