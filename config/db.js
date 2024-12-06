const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/myexam2023";
// METHOD 1
mongoose
  .connect(dbURL)
  .then(() => console.log("Connected Successfully To MongoDB"))
  .catch((err) => console.log(err));
