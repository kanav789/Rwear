const PostModel = require("../../Models/PostModel.js");

const AllProducts = async (req, res) => {
  try {
    let post = await PostModel.find().exec();
    if (post) {
      res.status(200).json({ post });
    } else {
      console.log(error);
    }
  } catch (error) {
    console.error("Error Showing product:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error at Product Showing" });
  }
};

module.exports = AllProducts;
