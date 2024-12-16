const jwt = require("jsonwebtoken");
const userModel = require("../../Models/UserModel.js");

const Login = async (req, res) => {
  const { email, password } = req.body;

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if the user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ error: "Account not found. Please register." });
    }

    // Verify password
    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: user.email, userId: user._id },
      process.env.Secret_key || "defaultSecret" // Use environment variable for the secret
    );

    // Send response
    res.status(200).json({
      message: "Successfully logged in",
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = Login;
