const mongoose = require("mongoose");
const { Schema } = mongoose;

const SubCatagoriesSchma = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  catagory: {
    type: Schema.Types.ObjectId,
    ref: "catagories",
    require: true,
  },
  status: {
    type: String,
    enum: ["waiting", "rejected", "approve"],
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

module.exports = mongoose.model("subCatagoris", SubCatagoriesSchma);
