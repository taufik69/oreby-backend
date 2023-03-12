require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const _ = express.Router();
const jwt = require("jsonwebtoken");
const UseSchema = require("../../models/UserModel");
const { getToken } = require("../../Jwt/jwt");
const { Nodemailer } = require("../../utils/nodeMailer");
const Marchant = require("../../models/Marchant");
const saltRounds = 10;

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

  // convert to normal password to hash password via  bycrpt

  const hashpassword = await bcrypt.hash(password, saltRounds);

  const AfterData = new UseSchema({
    email,
    phone,
    fristName,
    lastName,
    password: hashpassword,
  });
  AfterData.save();
  const token = getToken({ email: AfterData.email }, "1h");
  // await Nodemailer(AfterData.email);

  res.status(200).json({
    token: token,
  });
});

// when click email template verify btn then work this route .
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
  const ExistingEmail = await UseSchema.findOne({ email });

  // check this given email are exist in  database or not
  if (ExistingEmail.length == 0) {
    return res.json({
      error: `This ==> ${email} <== does't not Match`,
    });
  }

  // Now check is email verified or not!
  if (!ExistingEmail.verfied) {
    return res.status(200).json({
      message: "Please go to your mail and verify email",
    });
  }

  //  check the given password and brcpt password
  bcrypt.compare(password, ExistingEmail.password, function (err, result) {
    if (result) {
      return res.status(200).json({
        message: "Login sucessful",
      });
    }
    return res.status(404).json({
      error: "password does not match Try agin !",
    });
  });
});

_.post("/becomeMarchant", async (req, res) => {
  const { name, email, phoneNumber } = req.body;

  // let QueryData = await Marchant.find({ email });
  // if (QueryData.length == 0) {
  //   return res.status(400).json({
  //     message: ` did't found that email ${QueryData.email} ! please try again`,
  //   });
  // }

  await new Marchant({
    name,
    email,
    phoneNumber,
  }).save();
  res.status(200).json({
    message: "Please Wait for your admin approval",
  });
});

_.post("/marchantStatus", async (req, res) => {
  const { email, status } = req.body;
  const findEmail = await Marchant.find({ email: email });
  if (findEmail.length == 0) {
    return res.status(404).json({
      error: "Email does not find , please check Email Properly",
    });
  }

  const updateStatus = await Marchant.findOneAndUpdate(
    { email: email },
    { status: status },
    { new: true }
  );
  res.json(updateStatus);
});

module.exports = _;
