const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
       min: 3,
       max: 30,
       unique: true
   },
   description: {
       type: String,
       required: true,
       min: 10,
       max: 50
   },
   price: {
       type: Number,
       required: true,
       min: 0
   }
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema);