const jwt = require("jsonwebtoken");
const UserModel = require("../../Models/UserModel.js");
const PostModel = require("../../Models/PostModel.js");
const AllCart = async (req, res) => {
  try {
    // Check for the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Token missing or invalid" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Access" });
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.Secret_key);

    // Find user by ID from the decoded token
    const CartProduct = await UserModel.findById(decoded.userId).populate(
      "cart"
    );

    if (!CartProduct) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the cart items
    res.status(200).json({ cart: CartProduct.cart });
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = AllCart;
