const { Router } = require("express");
const { createProduct, getProducts, findProduct, getProductById, editPriceProducts, editProductById } = require("../controllers/productControllers");

const productRouter = Router();

productRouter.get("/:id", getProductById);
productRouter.get("/", getProducts);
productRouter.get("/find", findProduct);
productRouter.post("/edit/price", editPriceProducts);
productRouter.post("/edit/:id", editProductById);
productRouter.post("/create", createProduct);

module.exports = productRouter;