const { Router } = require("express");
const createPayment = require("../controllers/paymentControllers/createPayment");
const editPayment = require("../controllers/paymentControllers/editPayment");
const getPaymentById = require("../controllers/paymentControllers/getPaymentById");

const paymentRouter = Router();

paymentRouter.post("/edit/:id", editPayment);
paymentRouter.post("/create", createPayment);
paymentRouter.get("/:id", getPaymentById);

module.exports = paymentRouter;