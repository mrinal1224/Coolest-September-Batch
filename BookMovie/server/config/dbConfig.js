const mongoose = require("mongoose");

const dbString =
  "mongodb+srv://mrinal1224:VkYYhpx0oCJMm1sI@cluster0.tx2gb.mongodb.net/BMS?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbString)

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connection Succesfull");
});

connection.on("error", () => {
  console.log("Connection Unsuccesfull");
});
