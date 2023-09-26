const express = require("express");
const home = express.Router();

const WaliController = require("../controllers/user.Wali.controller");

const waliController = new WaliController();
home.get("/", waliController.index);


module.exports = home;