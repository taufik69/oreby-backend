const chalk = require("chalk");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
exports.DatabaseConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, () => {
    console.log(chalk.bgGreenBright("Database conneticing succesfully"));
  });
};
