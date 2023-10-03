const express = require("express");
const SiswaController = require("../controllers/siswa.controller");

const siswa = express.Router();


const siswaKontroller = new SiswaController();
siswa.get("/", siswaKontroller.index);
siswa.get("/add", siswaKontroller.indexAdd);
siswa.get("/edit", siswaKontroller.indexEdit);


module.exports = siswa;