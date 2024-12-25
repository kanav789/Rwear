const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel.js"); // Import your User model

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.Authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized - Token missing" });
  }

  const token = authHeader.split(" ")[1]; // Extract token

  try {
    // Decode the token
    const decoded = jwt.verify(token, process.env.Secret_key); // Use your JWT secret key

    // Find the user from the database
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = verifyToken;
