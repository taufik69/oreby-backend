const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchma = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    // required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  catagories: {
    type: Schema.Types.ObjectId,
    ref: "catagory",
    required: true,
  },
  subCatagories: {
    type: Schema.Types.ObjectId,
    ref: "subCatagoris",
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
  comments: {
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
