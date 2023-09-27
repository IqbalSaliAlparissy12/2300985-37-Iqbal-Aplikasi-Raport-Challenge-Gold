const express = require("express");
const home = require("./home");
const login = require("./login");
const userWali = require("./userWali");
const kelas = require("./kelas");
const mapel = require("./mapel");

const router = express.Router();

router.use("/home", home);
router.use("/login", login);
router.use("/wali", userWali);
router.use("/kelas", kelas);
router.use("/mapel", mapel);

module.exports = router;