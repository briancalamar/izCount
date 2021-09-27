const { Router } = require("express");
const createOrder = require("../controllers/orderControllers/createOrder");
const editOrder = require("../controllers/orderControllers/editOrder");
const getOrders = require("../controllers/orderControllers/getOrders");


const orderRouter = Router();

orderRouter.get("/", getOrders);
// orderRouter.get("/find", findUser);
// orderRouter.post("/edit/price", editPriceProducts);
orderRouter.post("/edit/:id", editOrder);
orderRouter.post("/create", createOrder);
// orderRouter.get("/:id", getUserById);

module.exports = orderRouter;