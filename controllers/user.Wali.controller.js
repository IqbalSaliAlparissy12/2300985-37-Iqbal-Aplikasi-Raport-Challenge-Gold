class WaliController {
    async index(req, res) {
        res.render("userWaliKelasList");
    }
    async indexAdd(req, res) {
        res.render("userWaliKelasAdd");
    }

    async indexEdit(req, res) {
        res.render("userWaliKelasEdit");
    }
}

module.exports = WaliController;