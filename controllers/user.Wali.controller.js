const UserService = require("../services/user.service");

const userService = new UserService();
class WaliController {
    //web
    async index(req, res) {
        try {
          const userData = await userService.getUserWali();
    
          res.render("userWaliKelaslist", {
            userWali: userData,
          });
        } catch (error) {
          console.log(error);
        }
      }
    

    async indexAdd(req, res) {
        res.render("userWaliKelasAdd",{
           userWali : req.tblAllUser
        });
    }

    async registerWaliKelas(req, res) {
        try {
          await userService.storeWaliKelas(req.body);
          // Tampilkan pesan sukses atau respons yang sesuai
          res.status(201).json({ message: "Registrasi berhasil" });
        } catch (error) {
          console.error(error);
          res.status(400).json({ error: error.message });
        }
      }

    //api get all
    async listUserWali(req, res) {
        try {
          const wali = await userService.getUserWali();
          res.status(200).json({ message: "SUCCES", data: wali });
        } catch (error) {
          res.status(500).json({ message: "FAILED" });
          console.error(error);
        }
      }


    async indexEdit(req, res) {
        res.render("userWaliKelasEdit");
    }

    
  async deleteWali(req, res) {
    try {
      const wali = await userService.delete(req.params.id);
      res.status(201).json({
        data: wali,
        message: "Berhasil Menghapus Wali Kelas",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Gagal Menghapus Mata Pelajaran." });
    }
  }
}

module.exports = WaliController;