require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

mongoose.connect(URI).then(() => {
  console.log("MongoDB database connection established successfully");
});

module.exports = mongoose;
