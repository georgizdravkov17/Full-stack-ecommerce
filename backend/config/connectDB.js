require("dotenv").config();
const mongoose = require("mongoose");

 const connectDB = async () => {
    try{
      await mongoose.connect(process.env.DB_URI);
      console.log("Succesfully connected to db!");
    } catch(err){
        console.log(err.message);
    }
}

module.exports = { connectDB }
