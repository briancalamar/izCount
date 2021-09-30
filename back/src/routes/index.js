const { Router } = require("express");
const categoryRouter = require("./categoryRoutes");
const orderRouter = require("./orderRoutes");
const paymentRouter = require("./orderRoutes copy");
const router = Router();
const productRouter = require('./productRoutes');
const sizeRouter = require("./sizeRoutes");
const userRouter = require("./userRoutes");

router.use("/product", productRouter);
router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/size", sizeRouter);
router.use("/order", orderRouter);
router.use("/payment", paymentRouter);

module.exports = router;