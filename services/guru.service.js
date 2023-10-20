const { tblUser } = require("../models");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {
    this.userModel = tblUser;
  }
  async store(payload) {
    const date = new Date();
    const { strName, strEmail, strPassword, strRole } = payload;
    const existingEmail = await this.findByEmail(strEmail);

    if(existingEmail){
      throw new Error("Email Sudah Terdaftar!")
    }

    const encript = await bcrypt.hash(strPassword, 10);

    // Simpan data pengguna ke database
    const inputUser = await this.userModel.create({
      strName,
      strEmail,
      strRole,
      strPassword: encript,
      createdAt: date,
      updatedAt: date,
    });
    return inputUser;
  }

  async findByEmail(strEmail){
    const data = await this.userModel.findOne({where : {strEmail}})
    return data;
  }
}

module.exports = UserService;