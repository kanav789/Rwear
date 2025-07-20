const PostModel = require("../../Models/PostModel");

const TeenGuy = () => async (req, res) => {
  try {
    let teenguy = await PostModel.find({ type: "teenguy" }).exec();

    if (!teenguy) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json({ message: "Products", teenguy });
  } catch (error) {
    res.send(error).status(404).json({ error: "Error in Fetching Product" });
  }
};
module.exports = TeenGuy;
