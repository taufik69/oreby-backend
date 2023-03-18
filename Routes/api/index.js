const express = require("express");
const _ = express.Router();
const authRoutes = require("./auth");
const brandRoutes = require("./brand");
const CatagoriesRoutes = require("./catagories");
const SubCatagoriesRoutes = require("./subCatagories");
_.use("/auth", authRoutes);
_.use("/brand", brandRoutes);
_.use("/catagories", CatagoriesRoutes);
_.use("/subcatagories", SubCatagoriesRoutes);

module.exports = _;
// start main route
