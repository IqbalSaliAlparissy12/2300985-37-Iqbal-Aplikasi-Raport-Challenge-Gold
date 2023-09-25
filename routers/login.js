const express = require("express");
const login = express.Router();
const LoginController = require("../controllers/login.controller");

const loginController = new LoginController();

login.get("/", loginController.index)


module.exports = login;