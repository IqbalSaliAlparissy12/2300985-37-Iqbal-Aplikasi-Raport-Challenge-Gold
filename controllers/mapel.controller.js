const MapelService = require("../services/mapel.service");

const mapelService = new MapelService();
class MapelKontroller {
  //web
  async index(req, res) {
    try {
      const mapelData = await mapelService.getMapel();

      res.render("mapelList", {
        mapel: mapelData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //api get all
  async listMapel(req, res) {
    try {
      const mapel = await mapelService.getMapel();
      res.status(200).json({ message: "SUCCES", data: mapel });
    } catch (error) {
      res.status(500).json({ message: "FAILED" });
      console.error(error);
    }
  }



  //api
  async mapelAdd(req, res) {
    const payload = req.body;
    const addMapel = await mapelService.addMapel(payload);

    res.status(201).json(addMapel);
  }

  async indexAdd(req, res) {
    res.render("mapelAdd");
  }

  
  //id Mapel
  async mapelDetail(req, res) {
    try {
      const id = req.params.id;
      const mapelData = await mapelService.getMapelId(id);
      res.render("mapelEdit", {
        mapel: mapelData,
      });

    } catch (error) {
      console.log(error);
    }
    
  }

  //api 
  async updateMapel(req, res) {
    try {
      const mapelId = req.params.id;
      const updatedMapelData = req.body;
      
      const editMapel = await mapelService.updateMapel(mapelId, updatedMapelData);
      console.log(editMapel);
      if (editMapel) {
        res
          .status(200)
          .json({ data: editMapel, message: "Mata pelajaran berhasil diubah" });
      } else {
        res.status(404).json({ message: "Mata pelajaran tidak ditemukan" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Gagal mengedit mata pelajaran." });
    }
  }


  async deleteMapel(req, res) {
    try {
      const mapel = await mapelService.delete(req.params.id);
      res.status(201).json({
        data: mapel,
        message: "Berhasil Menghapus Mata Pelajaran",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Gagal Menghapus Mata Pelajaran." });
    }
  }
}

module.exports = MapelKontroller;
