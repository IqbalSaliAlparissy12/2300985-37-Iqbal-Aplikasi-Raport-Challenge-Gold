const KelasService = require("../services/kelas.service");

const kelasService = new KelasService();
class KelasController {
  async index(req, res) {
    try {
      const kelasData = await kelasService.getKelas(null);
      res.render("kelasList", {
        kelas: kelasData,
      });
    } catch (error) {
      console.log(error);
    }
  }

 

  //api
  async indexAdd(req, res) {
    const payload = req.body;
    const addKelas = await kelasService.addKelas(payload);
    // res.render("kelasAdd");

    res.status(201).json(addKelas);
  }

  async pageCreateKelas(req, res) {
    res.render("kelasAdd", {});
  }

  async kelasDetail(req, res) {
    try {
      const id = req.params.id;
      const kelasData = await kelasService.getKelas(id);
      res.render("kelasEdit", {
          kelas: kelasData,
      });
    } catch (error) {
      console.log(error);
    }
  }


  //api 
  async updateKelas(req, res) {
    try {
      const kelasId = req.params.id;
      const updatedKelasData = req.body;

      const updateKelas = await kelasService.updateKelas(kelasId, updatedKelasData);

      if (updateKelas) {
        res
          .status(200)
          .json({ data: updateKelas, message: "Kelas berhasil diubah" });
      } else {
        res.status(404).json({ message: "Kelas tidak ditemukan" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Gagal mengedit Kelas." });
    }
  }

  

  async deleteKelas(req, res) {
    try {
      const kelas = await kelasService.delete(req.params.id);
      res.status(201).json({
        data: kelas,
        message: "Berhasil menghapus kelas",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Gagal menghapus kelas." });
    }
  }
}

module.exports = KelasController;
