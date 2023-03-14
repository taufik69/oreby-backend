const mongoose = require("mongoose");
const { Schema } = mongoose;

const BrandSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  updated: {
    type: Date,
  },
  created: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Brand", BrandSchema);
