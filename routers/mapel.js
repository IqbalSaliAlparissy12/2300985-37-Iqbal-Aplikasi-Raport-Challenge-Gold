const express = require("express");
const MapelKontroller = require("../controllers/mapel.controller");
// const KelasController = require("../controllers/kelas.controller");
const mapel = express.Router();


const mapelKontroller = new MapelKontroller();
mapel.get("/", mapelKontroller.index);
// kelas.get("/add", kelasController.indexAdd);
// kelas.get("/edit", kelasController.indexEdit);


module.exports = mapel;