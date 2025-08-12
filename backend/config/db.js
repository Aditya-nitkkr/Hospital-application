const mongoose = require("mongoose");

const connectDB = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error in connection");
  }
};

module.exports = connectDB;
