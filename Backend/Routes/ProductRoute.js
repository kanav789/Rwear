const express = require("express");
const MensProduct = require("../controller/Products/Mens");
const WomenProduct = require("../controller/Products/Womens");
const TeenGuy = require("../controller/Products/TeenGuy");
const OverCard = require("../controller/Products/OverCard");
const AddCart = require("../controller/Products/AddCart");
const AllCart = require("../controller/Products/AllCart");
const DeleteCart = require("../controller/Products/DeleteCart");

const ProductRouter = express.Router();

ProductRouter.get("/mens", MensProduct);
ProductRouter.get("/womens", WomenProduct);
ProductRouter.get("/Teenguy", TeenGuy);
ProductRouter.get("/OverCard/:id", OverCard);
ProductRouter.post("/product/cart/:productId", AddCart);
ProductRouter.get("/cart", AllCart);
ProductRouter.post("/deletecart/:id", DeleteCart);





module.exports = ProductRouter;
