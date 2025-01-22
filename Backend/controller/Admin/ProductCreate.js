const PostModel = require("../../Models/PostModel.js");

const ProductCreate = async (req, res) => {
  try {
    const { price, size, discount, image, title, type } = req.body;

    // Validate request body
    if (!price || !size || !discount || !image || !title || !type) {
      return res.status(400).json({ message: "All Fields Are Required" });
    }

    // Create the product
    const post = await PostModel.create({
      price,
      size,
      discount,
      image,
      title,
      type,
    });

    res.status(200).json({ message: "Product is Created Successfully" });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).send("Internal Server Error at Product Creation");
  }
};

module.exports = ProductCreate;
