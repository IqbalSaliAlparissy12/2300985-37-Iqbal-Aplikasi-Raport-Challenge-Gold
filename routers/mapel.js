const express = require("express");
const MapelKontroller = require("../controllers/mapel.controller");
// const KelasController = require("../controllers/kelas.controller");
const mapel = express.Router();


const mapelKontroller = new MapelKontroller();
mapel.get("/", mapelKontroller.index);
mapel.get("/add", mapelKontroller.indexAdd);
mapel.get("/edit", mapelKontroller.indexEdit);


module.exports = mapel;