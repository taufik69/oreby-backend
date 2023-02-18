const express = require("express");
const _ = express.Router();
const authRoutes = require("./auth");
_.use("/auth", authRoutes);

module.exports = _;
// start main route
