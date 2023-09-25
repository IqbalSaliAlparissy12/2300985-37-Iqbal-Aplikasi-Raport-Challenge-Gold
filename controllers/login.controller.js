class LoginController {
    async index(req, res) {
        res.render("login");
    }
}

module.exports = LoginController;