const express = require("express");
const MensProduct = require("../controller/Products/Mens");
const WomenProduct = require("../controller/Products/Womens");
const TeenGuy = require("../controller/Products/TeenGuy");
const OverCard = require("../controller/Products/OverCard");

const ProductRouter = express.Router();

ProductRouter.get("/mens", MensProduct);
ProductRouter.get("/womens", WomenProduct);
ProductRouter.get("/Teenguy", TeenGuy);
ProductRouter.get("/OverCard/:id", OverCard);



module.exports = ProductRouter;
