const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: [true, "name not provided"],
  },
  productPrice: {
    type: Number,
  },

  productDescription: {
    type: String,
    require: [true, "product description not provided"],
  },
  filePath: {
    data: Buffer,
    type: String,
    default: "default.jpg",
  },
});

module.exports = mongoose.model("product", productSchema);
