const express = require("express");
const SiswaController = require("../controllers/siswa.controller");
const permisionMiddleware = require("../middleware/permision.middleware");

const siswa = express.Router();


const siswaKontroller = new SiswaController();
siswa.get("/", permisionMiddleware, siswaKontroller.index);
siswa.get("/add", permisionMiddleware, siswaKontroller.indexAdd);
siswa.get("/edit", permisionMiddleware, siswaKontroller.indexEdit);


module.exports = siswa;