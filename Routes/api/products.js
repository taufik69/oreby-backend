const express = require("express");
const productModel = require("../../models/productModel");
const _ = express.Router();

_.post("/createproduct", async (req, res) => {
  let condtion = false;
  const { name, description, price } = req.body;
  do {
    let findName = await productModel.findOne({ name });
    if (findName) {
      findData.name += (+new Date() * Math.random()).toString().substring(0, 2);

      condtion = true;
    } else {
      condtion = false;
    }
  } while (condtion);

  const slug = name.toLowerCase().split(" ").join("-");
  res.json(slug);

  await new productModel({
    name,
    slug,
    description,
    price,
  }).save();
  res.status(200).json({
    message: `sucessfully create product `,
  });
});

module.exports = _;
