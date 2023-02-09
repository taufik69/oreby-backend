require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const app = express();

app.listen(process.env.PORT || 6000, () => {
  console.log(chalk.bgGreenBright(`Port running on ${process.env.PORT}`));
});
