const UserModel = require("../../Models/UserModel");
const jwt = require("jsonwebtoken");

const AddCart = async (req, res) => {
  const { productId } = req.params;
  console.log(productId);
  try {
    // Extract and validate token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Token missing or invalid" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: access " });
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.Secret_key);

    // Find user by ID from the decoded token
    const user = await UserModel.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the product already exists in the user's cart

    if (user.cart.includes(productId)) {
      return res.status(400).json({ message: "Product already in cart" });
    }

    // Add product ID to user's cart
    user.cart.push(productId);
    await user.save();

    // Send response back to frontend
    res.status(200).json({ message: "Product added to cart", cart: user.cart });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = AddCart;
