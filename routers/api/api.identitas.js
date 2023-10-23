const express = require("express");
const IdentitasKontroller = require("../../controllers/identitas.controller");

const identitasKontroller = new IdentitasKontroller

const apiIdentitas = express.Router();


apiIdentitas.post('/raport/identitas', identitasKontroller.identitasAdd);
apiIdentitas.get('/raport/identitas', identitasKontroller.listIdentitas);
apiIdentitas.get('/raport/identitas/:id', identitasKontroller.identitasDetail);
// Endpoint untuk memperbarui data kelas berdasarkan ID
apiIdentitas.put('/raport/identitas/:id', identitasKontroller.updateIdentitas);
apiIdentitas.delete("/raport/identitas/:id", identitasKontroller.deleteIdentitas);

module.exports = apiIdentitas;