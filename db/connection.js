const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost/Blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
