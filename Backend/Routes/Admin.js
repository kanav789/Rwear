const express = require("express");
const ProductCreate = require("../controller/Admin/ProductCreate");
const AllProducts = require("../controller/Admin/AllProduct");

const adminRouter = express.Router();

adminRouter.post("/admin/post", ProductCreate);
adminRouter.get("/admin/allpost", AllProducts);

module.exports = adminRouter;
