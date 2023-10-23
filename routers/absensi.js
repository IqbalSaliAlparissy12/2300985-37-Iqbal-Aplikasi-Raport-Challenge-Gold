const express = require("express");
const permisionMiddleware = require("../middleware/permision.middleware");
const AbsensiKontroller = require("../controllers/absensi.controller");
const tblabsensi = require("../models/tblabsensi");


const absensi = express.Router();


const absensiKontroller = new AbsensiKontroller();
absensi.get("/", permisionMiddleware, absensiKontroller.index, async(req, res) => {
    try {
        const absensi = await tblabsensi.findAll();
        res.status(200).json({
            status : "success",
            data : absensi,
            message: "Absensi berhasil ditambahkan!"
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
absensi.get("/add", permisionMiddleware, absensiKontroller.indexAdd);
absensi.get("/edit/:id", permisionMiddleware, absensiKontroller.absensiDetail);


module.exports = absensi;