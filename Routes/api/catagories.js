const express = require("express");
const _ = express.Router();

_.post("/subcatagories", (req,res)=> {
    let {name, status} = req.body;
    res.json({name, status})
  })

module.exports = _;