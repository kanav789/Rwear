const express = require("express");
const MensProduct = require("../controller/Products/Mens");
const WomenProduct = require("../controller/Products/Womens");

const ProductRouter = express.Router();

ProductRouter.get("/mens", MensProduct);
ProductRouter.get("/women", WomenProduct);

module.exports = ProductRouter;
