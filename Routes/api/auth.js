const express = require("express");
const _ = express.Router();
const jwt = require("jsonwebtoken");
const UseSchema = require("../../models/UserModel");
const { getToken } = require("../../Jwt/jwt");
const { Nodemailer } = require("../../utils/nodeMailer");

_.post("/registration", async (req, res) => {
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
  const token = getToken({ id: AfterData._id }, "1h");
  await Nodemailer(AfterData.email);

  res.status(200).json({ token });
});

_.post("/emailverification", (req, res) => {
  jwt.verify(
    req.headers.authorization,
    process.env.SECRECT_KEY,
    (err, decoded) => {
      res.status(200).json({
        message: decoded,
      });
    }
  );
});

module.exports = _;
