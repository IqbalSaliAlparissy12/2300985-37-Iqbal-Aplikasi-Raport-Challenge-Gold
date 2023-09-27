class MapelKontroller {
    async index(req, res) {
        res.render("mapelList");
    }
    async indexAdd(req, res) {
        res.render("mapelAdd");
    }

    async indexEdit(req, res) {
        res.render("mapelEdit");
    }
}

module.exports = MapelKontroller;