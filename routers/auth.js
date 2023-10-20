const express = require("express");
const passport = require("passport");
const authController = require("../controllers/auth.controller");
const loginMiddleware = require("../middleware/login-page.middleware");
const loginPageMiddleware = require("../middleware/login-page.middleware");

const authRouter = express.Router();

authRouter.get('/login', authController.indexLogin);
authRouter.post('/login', loginPageMiddleware , authController.login);
authRouter.get('/logout', authController.logout)

module.exports = authRouter;