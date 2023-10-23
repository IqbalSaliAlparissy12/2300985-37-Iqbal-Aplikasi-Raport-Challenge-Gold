const express = require("express");
const tblIdentitas = require("../models/tblmatapelajaran");
const permisionMiddleware = require("../middleware/permision.middleware");
const IdentitasKontroller = require("../controllers/identitas.controller");

const identitas = express.Router();


const identitasKontroller = new IdentitasKontroller();
identitas.get("/", permisionMiddleware, identitasKontroller.index, async(req, res) => {
    try {
        const identitas = await tblIdentitas.findAll();
        res.status(200).json({
            status : "success",
            data : identitas,
            message: "Identitas sekolah berhasil ditambahkan!"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data: req.body,
            message: err.message,
            stack: err
        })
    }
});
identitas.get("/add", permisionMiddleware, identitasKontroller.indexAdd);
identitas.get("/edit/:id", permisionMiddleware, identitasKontroller.identitasDetail);


module.exports = identitas;