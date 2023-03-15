const express = require("express");
const _ = express.Router();
const authRoutes = require("./auth");
const brandRoutes = require("./brand");
_.use("/auth", authRoutes);
_.use("/brand", brandRoutes);

module.exports = _;
// start main route
