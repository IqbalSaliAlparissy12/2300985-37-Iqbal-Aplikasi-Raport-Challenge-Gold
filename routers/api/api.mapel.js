const express = require("express");
const MapelKontroller = require("../../controllers/mapel.controller");

const mapelKontroller = new MapelKontroller

const apiMapel = express.Router();


apiMapel.post('/raport/mapel',mapelKontroller.mapelAdd );
apiMapel.get('/raport/mapel', mapelKontroller.listMapel);
// Endpoint untuk memperbarui data kelas berdasarkan ID
apiMapel.put('/raport/kelas/:id', mapelKontroller.updateMapel);

apiMapel.delete("/raport/mapel/:id", mapelKontroller.deleteMapel);

module.exports = apiMapel;