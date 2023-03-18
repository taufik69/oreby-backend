const express = require("express");
const _ = express.Router();
const CatagoriesSchema = require("../../models/CatagoryModel");

_.post("/createcatagories", async (req, res) => {
  try {
    let { name } = req.body;
    const showexistCatagories = CatagoriesSchema.findOne({ name });

    if (showexistCatagories) {
      return res
        .status(404)
        .json({ message: `This catagories ${name} are already exitst` });
    }

    const sendCatagoriesData = new CatagoriesSchema({
      name,
    });
    sendCatagoriesData.save();
    res.status(200).json(sendCatagoriesData);
  } catch (error) {
    res.status(404).json(error);
  }
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
