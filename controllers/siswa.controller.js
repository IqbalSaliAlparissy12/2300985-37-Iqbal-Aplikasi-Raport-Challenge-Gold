class SiswaController {
    async index(req, res) {
        res.render("siswaPerKelasList");
    }
    async indexAdd(req, res) {
        res.render("siswaPerKelasAdd");
    }

    async indexEdit(req, res) {
        res.render("siswaPerKelasEdit");
    }
}

module.exports = SiswaController;