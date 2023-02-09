require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is root route",
  });
});
app.get("/info", (req, res) => {
  res.status(200).json([
    {
      name: "Taufik islalm",
    },
    {
      name: "Allauddin mondol",
    },
    {
      name: "Thamina begum",
    },
    {
      name: "Memi akter Moni",
    },
    {
      name: "Oliul islam sojib",
    },
  ]);
});

app.listen(process.env.PORT || 8000, () => {
  console.log(chalk.bgGreenBright(`Port running on ${process.env.PORT}`));
});
