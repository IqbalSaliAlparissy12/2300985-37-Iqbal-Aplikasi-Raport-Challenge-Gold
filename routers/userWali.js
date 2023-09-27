const express = require("express");
const wali = express.Router();

const WaliController = require("../controllers/user.Wali.controller");

const waliController = new WaliController();
wali.get("/", waliController.index);
wali.get("/add", waliController.indexAdd);
wali.get("/edit", waliController.indexEdit);


module.exports = wali;