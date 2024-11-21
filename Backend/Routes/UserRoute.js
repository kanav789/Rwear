const express = require("express");

const Router = express.Router();

require("dotenv").config();

const Login = require("../controller/Auth/Login.js");
const Signup = require("../controller/Auth/Signup.js");
// userModel

Router.post("/login", Login);

Router.post("/Signup", Signup);

module.exports = Router;
