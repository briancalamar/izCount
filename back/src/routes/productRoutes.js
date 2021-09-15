const { Router } = require("express");
const createProduct = require("../controllers/productControllers/createProduct");
const getProducts = require("../controllers/productControllers/getProducts");
const findProduct = require("../controllers/productControllers/findProduct");
const editPriceProducts = require("../controllers/productControllers/editPriceProducts");
const editProductById = require("../controllers/productControllers/editProductById");
const getProductById = require("../controllers/productControllers/getProductById");

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/find", findProduct);
productRouter.post("/edit/price", editPriceProducts);
productRouter.post("/edit/:id", editProductById);
productRouter.post("/create", createProduct);
productRouter.get("/:id", getProductById);

module.exports = productRouter;