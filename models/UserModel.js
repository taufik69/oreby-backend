const mongoose = require("mongoose");
const { Schema } = mongoose;

const UseSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
  },
  fristName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  verfied: {
    type: Boolean,
    default: false,
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: "Merchant",
    default: null,
  },
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    default: "member",
    enum: ["member", "admin", "merchant"],
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpire: {
    type: Date,
  },
  created: {
    type: Date,
  },
  updated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UseSchema);
