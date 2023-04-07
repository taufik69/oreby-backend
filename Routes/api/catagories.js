const express = require("express");
const _ = express.Router();
const CatagoriesSchema = require("../../models/CatagoryModel");

_.post("/createcatagories", async (req, res) => {
  const { name } = req.body;
  let showexistCatagories = await CatagoriesSchema.findOne({ name });

  if (showexistCatagories) {
    return res
      .status(404)
      .json({ message: `This catagories ${name} are already exitst` });
  }

  const sendCatagoriesData = await new CatagoriesSchema({
    name,
  }).save();

  res.status(200).json(sendCatagoriesData);
});

// this routes is work for catagories filed take name and update staus
_.post("/catagoriesstatus", async (req, res) => {
  const { name, status } = req.body;

  const updateData = await CatagoriesSchema.findOneAndUpdate(
    { name: name },
    { status: status },
    { new: true }
  );

  res.json(updateData);
});

module.exports = _;
