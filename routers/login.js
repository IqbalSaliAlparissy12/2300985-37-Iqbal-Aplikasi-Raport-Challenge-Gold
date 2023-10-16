const express = require("express");
const loginController = require("../controllers/login.controller");
const loginRouter = express.Router();

const loginController = new loginController();

loginRouter.get("/login", loginController.indexLogin)
loginRouter.get("/login", loginController.login)
loginRouter.get('/logout', loginController.logout)


module.exports = loginRouter;