const express = require("express");
const productModel = require("../../models/productModel");
const _ = express.Router();

_.post("/createproduct", async (req, res) => {
  let condtion = false;
  let { name, description, price } = req.body;

  do {
    let findName = await productModel.findOne({ name });

    if (findName) {
      let charectar = "ABCEDEFGHIJKLMNOPWXYZabcdefghijklmnopwxyz";
      name +=
        " " +
        charectar.charAt(Math.ceil(Math.random() * charectar.length)) +
        (+new Date() * Math.random()).toString().substring(0, 2);

      condtion = true;
    } else {
      condtion = false;
    }
  } while (condtion);

  let slug = name.trim().toLowerCase().split(" ").join("-");

  await new productModel({
    name,
    slug,
    description,
    price,
  }).save();

  res.status(200).json({
    message: `${name} sucessfully create product`,
  });
});

module.exports = _;
