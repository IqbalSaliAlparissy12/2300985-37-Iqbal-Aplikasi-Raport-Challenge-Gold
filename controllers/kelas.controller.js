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

  async kelasDetail(req, res){
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
  async indexAdd(req, res) {
    const payload = req.body;
    const addKelas = await kelasService.addKelas(payload);
    // res.render("kelasAdd");

    res.status(201).json(addKelas);
  }

  async pageCreateKelas(req, res) {

    res.render(
        "kelasAdd",
     {
    });
  }

  async indexEdit(req, res) {
    res.render("kelasEdit");
  }

  async updateKelas(req, res) {
    try {
      // Mendapatkan ID kelas dari parameter
      const { id } = req.params;
  
      // Memanggil service untuk mendapatkan data kelas berdasarkan ID
      const kelas = await kelasService.getKelas(id);
  
      if (!kelas) {
        throw new Error('Kelas tidak ditemukan');
      }
  
      // Menampilkan halaman edit dengan data kelas
      res.status(201).json(kelas);
    } catch (error) {
      res.status(500).send(`Gagal menampilkan halaman edit kelas: ${error.message}`);
    }
  }
  

  async deleteKelas(req, res) {
    try {
        const kelas = await kelasService.delete(req.params.id)
        res.status(201).json({
            data: kelas, message: "Berhasil menghapus kelas"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Gagal menghapus kelas." });
    }
}
}

module.exports = KelasController;
