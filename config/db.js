const mongoose = require("mongoose");
const config = require("config");
const gravatar = require("gravatar");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Mongodb connected...");
  } catch (err) {
    console.log(err.message);
    //Exit process
    process.exit(1);
  }
};

module.exports = connectDB;
