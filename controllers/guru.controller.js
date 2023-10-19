class GuruKontroller {
    async index(req, res) {
        res.render("guruPerKelasList");
    }


    async indexAdd(req, res) {
        res.render("guruPerKelasAdd");
    }



    async indexEdit(req, res) {
        res.render("guruPerKelasEdit");
    }

    
}

module.exports = GuruKontroller;