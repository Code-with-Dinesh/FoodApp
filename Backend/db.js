const mongoose = require("mongoose");

const mongoUrl1 = "mongodb+srv://dineshgarig:Di%4012345@cluster0.jyn5f.mongodb.net/gofoodmern?retryWrites=true&w=majority";


const connectdb = async () => {
    try {
      await mongoose.connect(mongoUrl1);
      console.log("Connected to MongoDB");
      const fetch_data = mongoose.connection.db.collection("food_item");
      const data = await fetch_data.find({}).toArray();
      console.log();
    } catch (err) {
      console.error("Error while connecting to or fetching data from MongoDB:", err);
    }
  };

module.exports = connectdb;
