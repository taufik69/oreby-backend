const nodemailer = require("nodemailer");

exports.Nodemailer = async (email) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_HOST_MAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  let info = {
    from: `Admin 👻 ${process.env.APP_HOST_MAIL}`,
    to: email,
    // to: "taufik35-2915@diu.edu.bd",
    subject: "Orebye-E-Commerce",
    html: "<p> only for testing purpose </p>",
  };
  await transporter.sendMail(info, (error, res) => {
    if (error) {
      return error;
    } else {
      return res;
    }
  });
};
