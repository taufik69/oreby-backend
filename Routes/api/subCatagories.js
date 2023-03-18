const express = require("express");
const subCatagories = require("../../models/subCatagories");
const _ = express.Router();

_.post("/createSubcatagories", async (req, res) => {
  const { name, catagory } = req.body;
  // Check if subcatagories data are already exist or not

  const CheckSubCatagories = await subCatagories.findOne({ name });
  if (CheckSubCatagories) {
    return res.status(404).json({
      error: `This  ${name} subcatagories already exist`,
    });
  }

  //   send data to mongo db database
  const sendSubCatagoriesData = new subCatagories({
    name,
    catagory,
  });
  sendSubCatagoriesData.save();
  res.status(200).json({
    message: "SubCatagories data succesfully send",
  });
});

// now update the status field

_.post("/subcatagoriesstatus", async (req, res) => {
  const { name, status } = req.body;

  const updateData = await subCatagories.findOneAndUpdate(
    { name },
    { status },
    { new: true }
  );

  res.json(updateData);
});

module.exports = _;
