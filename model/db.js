const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageLink: String,
  name: String,
  date: { type: String, default: Date.now() },
});

module.exports = mongoose.model("trav4college", imageSchema);
