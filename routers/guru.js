const express = require("express");
const GuruKontroller = require("../controllers/guru.controller");
const guru = express.Router();


const guruKontroller = new GuruKontroller();
guru.get("/", guruKontroller.index);
guru.get("/add", guruKontroller.indexAdd);
guru.get("/edit", guruKontroller.indexEdit);


module.exports = guru;