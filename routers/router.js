const express = require("express");
const home = require("./home");
const auth = require("./auth");
const userWali = require("./userWali");
const kelas = require("./kelas");
const mapel = require("./mapel");
const guru = require("./guru");
const siswa = require("./siswa");
const user = require("./user");
const apiKelas = require("./api/api.kelas");
const apiMapel = require("./api/api.mapel");
const wali = require("./userWali");
const identitas = require("./identitas");
const apiIdentitas = require("./api/api.identitas");


const router = express.Router();

router.use('/api', apiKelas);
router.use('/api-mapel', apiMapel);
router.use('/api-identitas', apiIdentitas);
router.use("/home", home);
router.use("/", auth);
router.use("/wali", userWali);
router.use("/kelas", kelas);
router.use("/mapel", mapel);
router.use("/guru", guru);
router.use("/siswa", siswa);
router.use("/users", user);
router.use("/users", wali); 
router.use("/identitas", identitas);


module.exports = router;