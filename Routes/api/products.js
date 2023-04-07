const express = require("express");
const productModel = require("../../models/productModel");

const _ = express.Router();

_.post("/createproduct", async (req, res) => {
  let condtion = false;
  let { name, description, subCatagories, price, merchant } = req.body;

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
    subCatagories,
    merchant,
  }).save();

  res.status(200).json({
    message: `${name} sucessfully create product`,
  });
});

/**
 * if user want a product details . so you gave this features
 */

_.get("/allproduct", async (req, res) => {
  try {
    const allProduct = await productModel
      .find({})
      .populate({
        path: "subCatagories",
        populate: { path: "catagory" },
      })
      .populate("merchant");

    res.status(200).json(allProduct);
  } catch (error) {
    console.log(`Error from product routes all product middleware ${error}`);
  }
});

module.exports = _;
