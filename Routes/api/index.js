const express = require("express");
const _ = express.Router();
const authRoutes = require("./auth");
const brandRoutes = require("./brand");
const CatagoriesRoutes = require("./catagories");
_.use("/auth", authRoutes);
_.use("/brand", brandRoutes);
_.use("/catagories",CatagoriesRoutes);

module.exports = _;
// start main route
