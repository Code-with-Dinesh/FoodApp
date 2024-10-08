const mongoose = require("mongoose");

const mongoUrl1 = "mongodb+srv://dineshgarig:Di%4012345@cluster0.jyn5f.mongodb.net/gofoodmern?retryWrites=true&w=majority";


const connectdb = async () => {
    try {
      await mongoose.connect(mongoUrl1,{
        useNewUrlParser: true,
      });
      console.log("Connected to MongoDB");
      const fetch_data = mongoose.connection.db.collection("food_item");
      const data = await fetch_data.find({}).toArray();
      const foodCategory = mongoose.connection.db.collection("foodCategory");
      const myfoodCategory = await foodCategory.find({}).toArray();
       global.food_item = data;
       global.foodCategory = myfoodCategory;
      
    } catch (err) {
      console.error("Error while connecting to or fetching data from MongoDB:", err);
    }
  };

module.exports = connectdb;
