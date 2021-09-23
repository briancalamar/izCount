const { Router } = require("express");
const createCategory = require("../controllers/categoryControllers/createCategory");
const editCategory = require("../controllers/categoryControllers/editCategory");
const findCategory = require("../controllers/categoryControllers/findCategory");
const getCategories = require("../controllers/categoryControllers/getCategories");
const getCategoryById = require("../controllers/categoryControllers/getCategoryById");


const categoryRouter = Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/find", findCategory);
categoryRouter.post("/edit/:id", editCategory);
categoryRouter.post("/create", createCategory);
categoryRouter.get("/:id", getCategoryById);

module.exports = categoryRouter;