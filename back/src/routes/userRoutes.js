const { Router } = require("express");
const createUser = require("../controllers/userControllers/createUser");
const editUser = require("../controllers/userControllers/editUser");
const findUser = require("../controllers/userControllers/findUser");
const getUserById = require("../controllers/userControllers/getUserById");
const getUsers = require("../controllers/userControllers/getUsers");


const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/find", findUser);
// userRouter.post("/edit/price", editPriceProducts);
userRouter.post("/edit/:id", editUser);
userRouter.post("/create", createUser);
userRouter.get("/:id", getUserById);

module.exports = userRouter;