const mongoose = require("mongoose");
const { Schema } = mongoose;

const Marchant = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  brandName: {
    type: Schema.Types.ObjectId,
    ref: "BrandSchema",
    default: null,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["waiting", "rejected", "approved"],
    default: "waiting",
  },
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Marchant", Marchant);
