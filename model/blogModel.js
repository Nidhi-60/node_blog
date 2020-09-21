const mongoose = require("mongoose");
const user = require("./userModel");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  desc: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
