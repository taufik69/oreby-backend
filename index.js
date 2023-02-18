require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./Routes");

/*========================================================= 
    All middleware funciton written below
========================================================= */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 8000, () => {
  console.log(chalk.bgGreenBright(`Port running on ${process.env.PORT}`));
});
