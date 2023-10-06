const KelasService = require("../services/kelas.service");

const kelasService = new KelasService(); 
class KelasController {
    async index(req, res) {
        try {
            const kelasData = await kelasService.getKelas(null)
            res.render("kelasList", {data: {
                tblKelas :kelasData
            }});            
        } catch (error) {
            
        }

    }
    async indexAdd(req, res) {
        res.render("kelasAdd");
    }

    async indexEdit(req, res) {
        res.render("kelasEdit");
    }
}

module.exports = KelasController;