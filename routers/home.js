const express = require("express");
const home = express.Router();
const HomeController = require("../controllers/home.controller");
const permisionMiddleware = require("../middleware/permision.middleware");

const homeController = new HomeController();
home.get("/", permisionMiddleware, homeController.index);


module.exports = home;