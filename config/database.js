// /config/database.js

const mongoose = require("mongoose");

console.log("Starting 1");

const connectDB = async () => {
    console.log("Starting 2");
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URL);
    console.log(connectionInstance.connection.host);
    console.log("Starting 3");
  } catch (err) {
    console.log("Starting 4");
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
