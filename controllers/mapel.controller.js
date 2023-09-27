class MapelKontroller {
    async index(req, res) {
        res.render("mapelList");
    }
    async indexAdd(req, res) {
        res.render("kelasAdd");
    }

    async indexEdit(req, res) {
        res.render("kelasEdit");
    }
}

module.exports = MapelKontroller;