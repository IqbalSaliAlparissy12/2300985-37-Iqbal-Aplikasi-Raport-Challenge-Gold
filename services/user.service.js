const { tblUser } = require("../models");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {
    this.userModel = tblUser;
  }
  async store(payload) {
    const date = new Date();
    const { strName, strEmail, strPassword } = payload;
    const encript = await bcrypt.hash(strPassword, 10);

    // Simpan data pengguna ke database
    const data = await this.userModel.create({
      strName,
      strEmail,
      strRole,
      strPassword: encript,
      createdAt: date,
      updatedAt: date,
    });
    return data;
  }
}

module.exports = UserService;