const express = require("express");
const UserController = require("../controllers/user.controller");


const userController = new UserController();
const user = express.Router();

user.get("/admin", userController.indexRegister);
// user.get("/login", loginPageMiddleware, userController.indexLogin )

module.exports = user