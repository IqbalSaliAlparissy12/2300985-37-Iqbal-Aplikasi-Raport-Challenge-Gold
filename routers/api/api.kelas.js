const express = require("express");
const KelasController = require("../../controllers/kelas.controller");

const api = express.Router();

const kelasController = new KelasController

api.post('/raport/kelas', kelasController.indexAdd);

module.exports = api;