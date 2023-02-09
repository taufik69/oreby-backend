require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const app = express();

app.get("/", (res, req) => {
  res.status(200).json({
    message: "This is root route",
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(chalk.bgGreenBright(`Port running on ${process.env.PORT}`));
});
