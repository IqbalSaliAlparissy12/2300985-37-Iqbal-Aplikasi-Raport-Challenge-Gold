const express = require("express");
const GuruKontroller = require("../controllers/guru.controller");
const permisionMiddleware = require("../middleware/permision.middleware");
const guru = express.Router();


const guruKontroller = new GuruKontroller();
guru.get("/", permisionMiddleware, guruKontroller.index);
guru.get("/add", permisionMiddleware, guruKontroller.indexAdd);
guru.get("/edit", permisionMiddleware, guruKontroller.indexEdit);


module.exports = guru;