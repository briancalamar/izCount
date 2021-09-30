const { Router } = require("express");
const createOrder = require("../controllers/orderControllers/createOrder");
const editOrder = require("../controllers/orderControllers/editOrder");
const getOrderById = require("../controllers/orderControllers/getOrderById");
const getOrders = require("../controllers/orderControllers/getOrders");


const orderRouter = Router();

orderRouter.get("/", getOrders);
orderRouter.post("/edit/:id", editOrder);
orderRouter.post("/create", createOrder);
orderRouter.get("/:id", getOrderById);

module.exports = orderRouter;