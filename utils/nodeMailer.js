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
    html: `
    <p> Hello </p>
     <img src='https://i.postimg.cc/htxyVQcL/331994680-881999459690035-1989487636759127279-n.jpg'  alt='fuck you'/> 
      <a
        href="https://youtu.be/mpCJkS4h_Ss"
        style="
          background-color: brown;
          padding: 10px 20px;
          color: white;
          paddding-top: 15px;
          text-decoration:none;
        "
      >
        Go to America
      </a>
    `,
  };
  await transporter.sendMail(info, (error, res) => {
    if (error) {
      return error;
    } else {
      return res;
    }
  });
};
