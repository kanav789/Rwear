import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});
module.exports = mongoose.model("user", userSchema);
