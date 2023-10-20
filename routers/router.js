const express = require("express");
const home = require("./home");
const auth = require("./auth");
const userWali = require("./userWali");
const kelas = require("./kelas");
const mapel = require("./mapel");
const guru = require("./guru");
const siswa = require("./siswa");
// const api = require("./api/api.kelas");
const user = require("./user");
const apiKelas = require("./api/api.kelas");
const apiMapel = require("./api/api.mapel");


const router = express.Router();

router.use('/api', apiKelas);
router.use('/api-mapel', apiMapel);

router.use("/home", home);
router.use("/", auth);
router.use("/wali", userWali);
router.use("/kelas", kelas);
router.use("/mapel", mapel);
router.use("/guru", guru);
router.use("/siswa", siswa);
router.use("/users", user);

module.exports = router;