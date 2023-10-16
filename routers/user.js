const express = require("express");
const UserController = require("../controllers/user.controller");

const userController = new UserController();
const user = express.Router();

user.get("/admin", userController.indexRegister);

module.exports = user