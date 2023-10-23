const IdentitasService = require("../services/identitas.service");

const identitasService = new IdentitasService();
class IdentitasKontroller {
  //web
  async index(req, res) {
    try {
      const identitasData = await identitasService.getIdentitas();

      res.render("identitasList", {
        identitas: identitasData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //api get all
  async listIdentitas(req, res) {
    try {
      const identitas = await identitasService.getIdentitas();
      res.status(200).json({ message: "SUCCES", data: identitas });
    } catch (error) {
      res.status(500).json({ message: "FAILED" });
      console.error(error);
    }
  }



  //api
  async identitasAdd(req, res) {
    const payload = req.body;
    const addIdentitas = await identitasService.addIdentitas(payload);

    res.status(201).json(addIdentitas);
  }

  async indexAdd(req, res) {
    res.render("identitasAdd");
  }

  
  //id identitas
  async identitasDetail(req, res) {
    try {
      const id = req.params.id;
      const identitasData = await identitasService.getIdentitasId(id);
      res.render("identitasEdit", {
        identitas: identitasData,
      });

    } catch (error) {
      console.log(error);
    }
    
  }

  //api 
  async updateIdentitas(req, res) {
    try {
      const identitasId = req.params.id;
      const updatedIdentitasData = req.body;
      
      const editIdentitas = await identitasService.updateIdentitas(identitasId, updatedIdentitasData);
      console.log(editIdentitas);
      if (editIdentitas) {
        res
          .status(200)
          .json({ data: editIdentitas, message: "Identitas sekolah berhasil diubah" });
      } else {
        res.status(404).json({ message: "Identitas sekolah tidak ditemukan" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Gagal mengedit mata pelajaran." });
    }
  }


  async deleteIdentitas(req, res) {
    try {
      const identitas = await identitasService.delete(req.params.id);
      res.status(201).json({
        data: identitas,
        message: "Berhasil Menghapus Identitas Sekolah",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Gagal Menghapus Identitas Sekolah." });
    }
  }
}

module.exports = IdentitasKontroller;
