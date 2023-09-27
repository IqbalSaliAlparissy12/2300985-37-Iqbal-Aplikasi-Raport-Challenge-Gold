class KelasController {
    async index(req, res) {
        res.render("kelasList");
    }
    async indexAdd(req, res) {
        res.render("kelasAdd");
    }

    async indexEdit(req, res) {
        res.render("kelasEdit");
    }
}

module.exports = KelasController;