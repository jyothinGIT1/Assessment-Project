const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: { type: String },
  filePath: {
    data: Buffer,
    type: String,
    default: "default.jpg",
  },
});

module.exports = mongoose.model("image", imageSchema);
