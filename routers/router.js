const express = require("express");
const home = require("./home");
const login = require("./login");
const userWali = require("./userWali");

const router = express.Router();

router.use("/home", home);
router.use("/login", login);
router.use("/add-wali", userWali);

module.exports = router;