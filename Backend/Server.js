const express = require("express");
const userRouter = require("./Routes/UserRoute.js");
const DatabaseConnected = require("./config.js");
const app = express();
const cors = require("cors");
const ProductRouter = require("./Routes/ProductRoute.js");

// Connect to the database
DatabaseConnected();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());

// Define routes
app.use("/api/users", userRouter);


app.use("/api/users", ProductRouter);


const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});


app.use(express.static("./Frontend/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
