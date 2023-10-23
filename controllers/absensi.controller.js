const AbsensiService = require("../services/absensi.service");

const absensiService = new AbsensiService();


class AbsensiKontroller {
    //web
    async index(req, res) {
      try {
        const absensiData = await absensiService.getAbsensi();
  
        res.render("absensiList", {
          absensi: absensiData,
        });
      } catch (error) {
        console.log(error);
      }
    }
  
    //api get all
    async listAbsensi(req, res) {
      try {
        const absensi = await absensiService.getAbsensi();
        res.status(200).json({ message: "SUCCES", data: absensi });
      } catch (error) {
        res.status(500).json({ message: "FAILED" });
        console.error(error);
      }
    }


    //api
    async absensiAdd(req, res) {
      const payload = req.body;
      const addAbsensi = await absensiService.addAbsensi(payload);
  
      res.status(201).json(addAbsensi);
    }
  
    async indexAdd(req, res) {
      res.render("absensiAdd");
    }
  
    
    //id absensi
    async absensiDetail(req, res) {
      try {
        const id = req.params.id;
        const absensiData = await absensiService.getAbsensiId(id);
        res.render("absensiEdit", {
          absensi: absensiData,
        });
  
      } catch (error) {
        console.log(error);
      }
      
    }
  
    //api 
    async updateAbsensi(req, res) {
      try {
        const absensiId = req.params.id;
        const updatedAbsensiData = req.body;
        
        const editAbsensi = await absensiService.updateAbsensi(absensiId, updatedAbsensiData);
        console.log(editAbsensi);
        if (editAbsensi) {
          res
            .status(200)
            .json({ data: editAbsensi, message: "Absensi berhasil diubah" });
        } else {
          res.status(404).json({ message: "Absensi tidak ditemukan" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Gagal mengedit absensi." });
      }
    }
  
  
    async deleteAbsensi(req, res) {
      try {
        const absensi = await absensiService.delete(req.params.id);
        res.status(201).json({
          data: absensi,
          message: "Berhasil menghapus absensi siswa",
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Gagal Menghapus absensi siswa." });
      }
    }
  }
  
  module.exports = AbsensiKontroller;
  