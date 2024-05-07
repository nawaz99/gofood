const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://nawazsharief786:09231a0248@cluster0.3pdzu9w.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoDB;
