const express = require("express");
const KelasController = require("../../controllers/kelas.controller");

const api = express.Router();

const kelasController = new KelasController

api.post('/raport/kelas', kelasController.indexAdd);
// Endpoint untuk memperbarui data kelas berdasarkan ID
api.put('/raport/kelas/:id', kelasController.indexEdit);

api.delete("/raport/kelas/:id", kelasController.deleteKelas);

module.exports = api;