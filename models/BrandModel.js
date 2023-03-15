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
  marchant: {
    type: Schema.Types.ObjectId,
    ref: "Marchant",
    default: null,
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

module.exports = mongoose.model("Brand", BrandSchema);
