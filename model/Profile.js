const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: String,
  description: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
