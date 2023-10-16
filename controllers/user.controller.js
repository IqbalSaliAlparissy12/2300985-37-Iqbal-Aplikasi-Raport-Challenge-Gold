const UserService = require("../services/user.service");

const userService = new UserService();

class UserController {
    async indexRegister(req, res) {
        res.render("userAdminAdd", {
             tblUser: req.tblUser
        })
    }

    async register(req, res) {
        try {
            await userService.store(req.body);
            // Tampilkan pesan sukses atau respons yang sesuai
            res.status(201).json({ message: 'Registrasi berhasil' });
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message});
        }
    }
}

module.exports = UserController;