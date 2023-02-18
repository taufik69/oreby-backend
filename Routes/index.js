const express = require("express");
const _ = express.Router();
const apiRoutes = require("./api");

const baseurl = process.env.BASE_URL;
_.use(baseurl, apiRoutes);
_.use(baseurl, (req, res) => {
  res.status(404).json({
    message: "Api not found this routes",
  });
});
module.exports = _;
