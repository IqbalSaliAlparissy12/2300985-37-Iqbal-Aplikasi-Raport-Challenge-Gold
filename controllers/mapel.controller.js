const MapelService = require("../services/mapel.service");

const mapelService = new MapelService();
class MapelKontroller {
    async index(req, res) {
        try {
            const mapelData = await mapelService.getMapel(null);

            res.render("mapelList",{
                mapel: mapelData
            });
        } catch (error) {
            
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

    async indexEdit(req, res) {
        res.render("mapelEdit");
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