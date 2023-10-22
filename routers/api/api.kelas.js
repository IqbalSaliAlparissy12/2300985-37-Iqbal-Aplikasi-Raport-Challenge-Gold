const express = require("express");
const KelasController = require("../../controllers/kelas.controller");
const UserController = require("../../controllers/user.controller");
const WaliController = require("../../controllers/user.Wali.controller");

// const Auth = require("../../controllers/auth.controller");



const api = express.Router();

const kelasController = new KelasController
const userController = new UserController;
const waliController = new WaliController
// const loginController = new Auth;

api.post('/raport/kelas', kelasController.indexAdd);
// Endpoint untuk memperbarui data kelas berdasarkan ID
api.put('/raport/kelas/:id', kelasController.updateKelas);
api.delete("/raport/kelas/:id", kelasController.deleteKelas);



// Endpoint user admin
api.post('/raport/users/admin', userController.register);
api.get('/raport/users/admin', userController.listUserAdmin);

// Endpoint user wali
api.post('/raport/users/wali', waliController.registerWaliKelas);
api.get('/raport/users/wali', waliController.listUserWali)
api.delete("/raport/users/wali/:id", waliController.deleteWali);



module.exports = api;