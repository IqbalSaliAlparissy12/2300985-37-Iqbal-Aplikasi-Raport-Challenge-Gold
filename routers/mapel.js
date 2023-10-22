const express = require("express");
const MapelKontroller = require("../controllers/mapel.controller");
const tblmatapelajaran = require("../models/tblmatapelajaran");

const mapel = express.Router();


const mapelKontroller = new MapelKontroller();
mapel.get("/", mapelKontroller.index, async(req, res) => {
    try {
        const mapel = await tblmatapelajaran.findAll();
        res.status(200).json({
            status : "success",
            data : mapel,
            message: "Mata pelajaran berhasil ditambahkan!"
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
mapel.get("/add", mapelKontroller.indexAdd);
mapel.get("/edit/:id", mapelKontroller.mapelDetail);


module.exports = mapel;