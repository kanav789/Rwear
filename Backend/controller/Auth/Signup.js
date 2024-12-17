const jwt = require("jsonwebtoken");
const userModel = require("../../Models/UserModel.js");

const Signup = async (req, res) => {
  const { name, email, password } = req.body;

  // Input validation
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "This email is already registered" });
    }

    // Create new user
    const newUser = await userModel.create({ name, email, password });

    // Generate JWT token
    const token = jwt.sign(
      { email: newUser.email, userId: newUser._id },
      process.env.Secret_key || "defaultSecret" // Use an environment variable for the secret
    );

    // Send success response
    res.status(201).json({
      message: "Registration successful",
      token,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res
      .status(500)
      .json({ error: "Internal server error during registration" });
  }
};

module.exports = Signup;
