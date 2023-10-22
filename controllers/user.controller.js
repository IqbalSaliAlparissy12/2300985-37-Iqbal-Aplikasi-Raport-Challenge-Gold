const UserService = require("../services/user.service");

const userService = new UserService();

class UserController {
  async indexRegister(req, res) {
    res.render("userAdminAdd", {
      user: req.tblUser,
    });
  }

  async register(req, res) {
    try {
      await userService.store(req.body);
      // Tampilkan pesan sukses atau respons yang sesuai
      res.status(201).json({ message: "Registrasi berhasil" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  }

    //api get all
    async listUserAdmin(req, res) {
      try {
        const admin = await userService.getUser();
        res.status(200).json({ message: "SUCCES", data: admin });
      } catch (error) {
        res.status(500).json({ message: "FAILED" });
        console.error(error);
      }
    }
  
    //web
    async index(req, res) {
      try {
        const userData = await userService.getUser();
  
        res.render("userAdminList", {
          user: userData,
        });
      } catch (error) {
        console.log(error);
      }
    }
  
}

module.exports = UserController;
