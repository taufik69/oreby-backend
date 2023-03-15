const express = require("express");
const _ = express.Router();
const BrandSchema = require("../../models/BrandModel.js");

_.post("/createbrand", async (req, res) => {
  const { name, marchant } = req.body;

  const sendBrandData = await new BrandSchema({
    name,
    marchant,
  }).save();
  res.status(200).json(sendBrandData);
});

module.exports = _;
