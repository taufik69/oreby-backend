const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchma = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    default: null,
  },
  rating: {
    type: Number,
    default: null,
  },
  commets: {
    type: String,
    default: null,
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: "Marchant",
    default: null,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["waiting", "Reject", "Approved"],
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

module.exports = mongoose.model("product", productSchma);
