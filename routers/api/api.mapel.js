const express = require("express");
const MapelKontroller = require("../../controllers/mapel.controller");

const mapelKontroller = new MapelKontroller

const apiMapel = express.Router();


apiMapel.post('/raport/mapel',mapelKontroller.indexAdd );
// Endpoint untuk memperbarui data kelas berdasarkan ID
// api.put('/raport/kelas/:id', kelasController.updateKelas);

apiMapel.delete("/raport/mapel/:id", mapelKontroller.deleteMapel);

module.exports = apiMapel;