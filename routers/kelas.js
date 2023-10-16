const express = require("express");
const KelasController = require("../controllers/kelas.controller");
const tblkelas = require("../models/tblkelas");
const kelas = express.Router();


const kelasController = new KelasController();
kelas.get("/", kelasController.index, async(req,res)=> {
    try {
        const kelas = await tblkelas.findAll();
        res.status(200).json({
            status: "success",
            data: kelas
        })
    } catch (error) {
        
    }
});

kelas.get("/add", kelasController.pageCreateKelas);
kelas.get("/edit/:id", kelasController.kelasDetail);


module.exports = kelas;