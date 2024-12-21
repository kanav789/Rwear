const UserModel = require("../../Models/UserModel.js");
const jwt = require("jsonwebtoken");

const DeleteCart = async (req, res) => {
  const { id } = req.params;
  console.log(`Deleting item with ID: ${id}`);

  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Token missing or invalid" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Access" });
    }

    const decoded = jwt.verify(token, process.env.Secret_key);

    // Find the user by their ID from the decoded token
    const user = await UserModel.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the item exists in the user's cart
    const itemIndex = user.cart.indexOf(id);
    if (itemIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Remove the item from the cart
    user.cart.splice(itemIndex, 1);
    await user.save();

    return res.status(200).json({
      message: "Product successfully removed from cart",
      updatedCart: user.cart,
    });
  } catch (error) {
    console.error("Error deleting product from cart:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while deleting the product" });
  }
};

module.exports = DeleteCart;
