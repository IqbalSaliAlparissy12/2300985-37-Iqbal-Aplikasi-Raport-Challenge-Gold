const express = require("express");
const KelasController = require("../../controllers/kelas.controller");
const UserController = require("../../controllers/user.controller");

const Auth = require("../../controllers/auth.controller");



const api = express.Router();

const kelasController = new KelasController
const userController = new UserController;
// const loginController = new Auth;

api.post('/raport/kelas', kelasController.indexAdd);
// Endpoint untuk memperbarui data kelas berdasarkan ID
api.put('/raport/kelas/:id', kelasController.updateKelas);

api.delete("/raport/kelas/:id", kelasController.deleteKelas);



// Endpoint user
api.post('/raport/users/register', userController.register);



// Endpoint login
api.post('/raport/login', Auth.indexLogin );

module.exports = api;