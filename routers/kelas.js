const express = require("express");
const KelasController = require("../controllers/kelas.controller");
const tblkelas = require("../models/tblkelas");
const permisionMiddleware = require("../middleware/permision.middleware");
const kelas = express.Router();


const kelasController = new KelasController();
kelas.get("/", permisionMiddleware, kelasController.index, async(req,res)=> {
    try {
        const kelas = await tblkelas.findAll();
        res.status(200).json({
            status: "success",
            data: kelas
        })
    } catch (error) {
        
    }
});

kelas.get("/add", permisionMiddleware, kelasController.pageCreateKelas);
kelas.get("/edit/:id", permisionMiddleware, kelasController.kelasDetail);


module.exports = kelas;