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

_.post("/brandstatus", async (req, res) => {
  const { name, status } = req.body;

  const findresult = await BrandSchema.findOneAndUpdate(
    { name: name },
    { status: status },
    { new: true }
  );
  res.json(findresult);
});


module.exports = _;
