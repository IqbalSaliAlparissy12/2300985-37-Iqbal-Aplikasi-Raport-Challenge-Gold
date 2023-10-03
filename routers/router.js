const express = require("express");
const home = require("./home");
const login = require("./login");
const userWali = require("./userWali");
const kelas = require("./kelas");
const mapel = require("./mapel");
const guru = require("./guru");
const siswa = require("./siswa");

const router = express.Router();

router.use("/home", home);
router.use("/login", login);
router.use("/wali", userWali);
router.use("/kelas", kelas);
router.use("/mapel", mapel);
router.use("/guru", guru);
router.use("/siswa", siswa);

module.exports = router;