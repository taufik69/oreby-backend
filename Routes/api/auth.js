const express = require("express");
const _ = express.Router();

_.get("/registration", (req, res) => {
  const { email, phone, fristName, lastName, password } = req.body;

  // cheking all filed are full or not full

  if (!email) {
    return res.status(401).json({
      message: "Enter Email",
    });
  }
  if (!phone) {
    return res.status(401).json({
      message: "phone number needed",
    });
  }
  if (!fristName) {
    return res.status(401).json({
      message: "Fristname missing",
    });
  }
  if (!lastName) {
    return res.status(401).json({
      message: "lastName missing",
    });
  }
  if (!password) {
    return res.status(401).json({
      message: "password missing",
    });
  }
  res.status(200).json({
    email,
    phone,
    fristName,
    lastName,
    password,
  });
});

module.exports = _;
