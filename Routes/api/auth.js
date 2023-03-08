require("dotenv").config();
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
      error: "Enter Email",
    });
  }
  if (!phone) {
    return res.status(401).json({
      error: "phone number needed",
    });
  }
  if (!fristName) {
    return res.status(401).json({
      error: "Fristname missing",
    });
  }
  if (!lastName) {
    return res.status(401).json({
      error: "lastName missing",
    });
  }
  if (!password) {
    return res.status(401).json({
      error: "password missing",
    });
  }

  const duplicateMail = await UseSchema.find({ email: email });
  if (duplicateMail.length > 0) {
    return res.status(404).json({
      error: "This  Email Already Exist",
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
  const token = getToken({ email: AfterData.email }, "1h");
  await Nodemailer(AfterData.email);

  res.status(200).json({
    token: token,
  });
});

_.post("/emailverification", (req, res) => {
  jwt.verify(
    req.headers.authorization,
    process.env.SECRECT_KEY,
    async function (err, decoded) {
      const checkverified = await UseSchema.find({ email: decoded.email });
      if (checkverified[0].verfied) {
        return res.status(404).json({
          error: "This email already verified",
        });
      }

      const filter = { email: decoded.email };
      const update = { verfied: true };
      let updated = await UseSchema.findOneAndUpdate(
        filter,
        update,

        {
          new: true,
        }
      );
      res.json({
        message: updated,
      });
    }
  );
});

_.post("/login", async (req, res) => {
  let { email, password } = req.body;
  const ExistingEmail = await UseSchema.find({ email });
  if (ExistingEmail.length == 0) {
    return res.json({
      error: `This ==> ${email} <== does't not Match`,
    });
  }
  res.json(ExistingEmail);
});

module.exports = _;
