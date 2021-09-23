const { Router } = require("express");
const createSize = require("../controllers/sizeControllers/createSize");
const editSize = require("../controllers/sizeControllers/editSize");
const findSize = require("../controllers/sizeControllers/findSize");
const getSizeById = require("../controllers/sizeControllers/getSizeById");
const getSizes = require("../controllers/sizeControllers/getSizes");

const sizeRouter = Router();

sizeRouter.get("/", getSizes);
sizeRouter.get("/find", findSize);
sizeRouter.post("/edit/:id", editSize);
sizeRouter.post("/create", createSize);
sizeRouter.get("/:id", getSizeById);

module.exports = sizeRouter;