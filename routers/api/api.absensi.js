const express = require("express");
const AbsensiKontroller = require("../../controllers/absensi.controller");

const absensiKontroller = new AbsensiKontroller

const apiAbsensi = express.Router();


apiAbsensi.post('/raport/absensi', absensiKontroller.absensiAdd);
apiAbsensi.get('/raport/absensi', absensiKontroller.listAbsensi);
apiAbsensi.get('/raport/absensi/:id', absensiKontroller.absensiDetail);
// Endpoint untuk memperbarui data kelas berdasarkan ID
apiAbsensi.put('/raport/absensi/:id', absensiKontroller.updateAbsensi);
apiAbsensi.delete("/raport/absensi/:id", absensiKontroller.deleteAbsensi);

module.exports = apiAbsensi;