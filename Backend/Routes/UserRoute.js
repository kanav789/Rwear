const express = require("express");

const Router = express.Router();

require("dotenv").config();

import Login from "../controller/Auth/Login.js";
import Signup from "../controller/Auth/Signup.js";
// userModel

Router.get("/login", Login);

Router.get("/Signup", Signup);

module.exports = Router;
