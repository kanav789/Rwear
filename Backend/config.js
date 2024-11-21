const mongoose = require("mongoose");

require("dotenv").config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DataBase is connected");
  })
  .catch((err) => {
    console.log(err);
  });
