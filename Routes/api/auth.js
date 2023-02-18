const express = require("express");
const _ = express.Router();

_.get("/registration", (req, res) => {
  res.json({
    message: "this is auth api",
  });
});

module.exports = _;
