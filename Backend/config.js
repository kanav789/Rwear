const mongoose = require("mongoose");

require("dotenv").config();

function DatabaseConnected() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("DataBase is connected");
    })
    .catch((err) => {
      console.log(err, "err");
    });
}
module.exports = DatabaseConnected;