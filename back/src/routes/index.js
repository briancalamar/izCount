const { Router } = require("express");
const router = Router();
const productRouter = require('./productRoutes');
const userRouter = require("./userRoutes");

router.use("/product", productRouter);
router.use("/user", userRouter);

module.exports = router;