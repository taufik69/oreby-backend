const express = require("express");
const _ = express.Router();
const UseSchema = require("../../models/UserModel");

_.post("/registration", (req, res) => {
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

  const AfterData = new UseSchema({
    email,
    phone,
    fristName,
    lastName,
    password,
  });
  AfterData.save();
  res.status(200).json(AfterData);
});

module.exports = _;
