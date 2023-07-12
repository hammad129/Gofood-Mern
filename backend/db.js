const mongoose = require("mongoose");
const mongoURI =
  "mongodb://gofood:allahjee1999@ac-vzw9tji-shard-00-00.j5nlh0p.mongodb.net:27017,ac-vzw9tji-shard-00-01.j5nlh0p.mongodb.net:27017,ac-vzw9tji-shard-00-02.j5nlh0p.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-nx6a9n-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      //console.log("Connected to MongoDB");
      const fetch_data = mongoose.connection.db.collection("food_items");
      const foodCategory = mongoose.connection.db.collection("foodCategory");
      fetch_data
        .find()
        .toArray()
        .then((foodItems) => {
          console.log(foodItems); // Log all the data in the "food_items" collection
          global.food_items = foodItems;
          console.log(global.foodItems);
        })
        .catch((error) => {
          console.error("Error retrieving food items:", error);
        });

      foodCategory
        .find()
        .toArray()
        .then((foodcategory) => {
          console.log(foodcategory); // Log all the data in the "food_items" collection
          global.foodCategory = foodcategory;
          console.log(global.foodCategory);
        })
        .catch((error) => {
          console.error("Error retrieving food items:", error);
        });
    })
    .catch((erroe) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = mongoDB;
