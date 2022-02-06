const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const obj = {
    id: 1,
    name: "Me",
  };
  res.json(obj);
});

module.exports = router;
