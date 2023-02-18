const express = require("express");
const _ = express.Router();

_.get("/taufik", (req, res) => {
  res.json({
    message: "this is auth api",
  });
});

module.exports = _;
