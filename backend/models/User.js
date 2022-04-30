const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
      type: String,
      required: true,
      min: 3,
      max: 15
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
    max: 15
},
username: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 15
},
email: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 30
},
password: {
    type: String,
    required: true,
    min: 3,
},
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema);