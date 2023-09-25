const express = require("express");
const home = express.Router();
const HomeController = require("../controllers/home.controller");

const homeController = new HomeController();
home.get("/", homeController.index);


module.exports = home;