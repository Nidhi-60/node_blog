const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    allowNull: false,
  },
  email: { type: String, required: true, allowNull: false },
  password: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
