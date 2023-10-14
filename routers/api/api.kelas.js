const express = require("express");
const KelasController = require("../../controllers/kelas.controller");

const api = express.Router();

const kelasController = new KelasController

api.post('/raport/kelas', kelasController.indexAdd);
// Endpoint untuk memperbarui data kelas berdasarkan ID
api.put('/raport/kelas/:id', kelasController.updateKelas);

api.delete("/raport/kelas/:id", kelasController.deleteKelas);

const UserController = require("../../controllers/user.controller");

const userController = new UserController;

// Endpoint user
api.post('/v1/users/register', userController.register);

module.exports = api;