const { Router } = require("express");
const router = Router();
const productRouter = require('./productRoutes')

router.use("/product", productRouter);

router.get("/", (req, res) => {
    res.send("Hola")
})

module.exports = router;