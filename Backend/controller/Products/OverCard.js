const PostModel = require("../../Models/PostModel.js");

const OverCard = async (req, res) => {
  try {
    const postId = req.params.id; // Accessing the id from req.params
    if (!postId) {
      return res.status(400).json({ error: "Product ID is not provided" });
    }

    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json({ message: "Product found", post });
  } catch (error) {
    console.error("Error fetching product:", error); // Log the error for debugging
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = OverCard;
