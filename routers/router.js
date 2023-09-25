const express = require("express");
const home = require("./home");
const login = require("./login");

const router = express.Router();

router.use("/home", home);
router.use("/login", login);

module.exports = router;