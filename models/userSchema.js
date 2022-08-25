const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name not provided"],
  },
  email: {
    type: String,
    require: [true, "email not provided"],
  },
  password: {
    type: String,
    require: [true, "password not provided"],
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  contactNumber: {
    type: Number,
    require: [true, "number not provided"],
  },
  address: {
    type: String,
    require: [true, "address not provided"],
  },
});

module.exports = mongoose.model("user", userSchema);
