require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./Routes");
const { DatabaseConnect } = require("./configuration/DbConnet");

/*========================================================= 
All middleware funciton written below
========================================================= */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
DatabaseConnect();
app.use(routes);


app.listen(process.env.PORT || 8000, () => {
  console.log(chalk.blueBright(`Port running on ${process.env.PORT}`));
});
