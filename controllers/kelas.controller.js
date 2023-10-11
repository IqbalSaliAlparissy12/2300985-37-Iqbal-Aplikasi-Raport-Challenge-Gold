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

    res.render(
        "kelasAdd",
     {

    });
  }



  async indexEdit(req, res) {
    res.render("kelasEdit");
  }
}

module.exports = KelasController;
