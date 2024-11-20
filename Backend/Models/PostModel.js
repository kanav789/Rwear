import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  price: String,
  size: String,
  discount: String,
  image: String,
  title: String,
  type: String,
});
module.exports = mongoose.model("post", postSchema);