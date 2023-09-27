const express = require("express");
const KelasController = require("../controllers/kelas.controller");
const kelas = express.Router();


const kelasController = new KelasController();
kelas.get("/", kelasController.index);
kelas.get("/add", kelasController.indexAdd);
kelas.get("/edit", kelasController.indexEdit);


module.exports = kelas;