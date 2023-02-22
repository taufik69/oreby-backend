const jwt = require("jsonwebtoken");

exports.getToken = (data, expiresIn) => {
  return jwt.sign(data, process.env.SECRECT_KEY, { expiresIn });
};
