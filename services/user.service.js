const { tblUser, tblAllUser } = require("../models");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {
    this.userModel = tblUser;
    this.userWaliModel = tblAllUser
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

  async getUser() {
    try {
      return await this.userModel.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async storeWaliKelas(payload) {
    const date = new Date();
    const { strName, strEmail, strPassword, strRole, strKelas } = payload;
    const existingEmail = await this.findByEmail(strEmail);

    if(existingEmail){
      throw new Error("Email Sudah Terdaftar!")
    }

    const encript = await bcrypt.hash(strPassword, 10);

    // Simpan data pengguna ke database
    const inputUser = await this.userWaliModel.create({
      strName,
      strEmail,
      strRole,
      strKelas,
      strPassword: encript,
      createdAt: date,
      updatedAt: date,
    });
    return inputUser;
  }

  async findByEmailWali(strEmail){
    const data = await this.userWaliModel.findOne({where : {strEmail}})
    return data;
  }

  async getUserWali() {
    try {
      return await this.userWaliModel.findAll();
    } catch (error) {
      console.log(error);
    }
  }


  async delete(id) {
    const waliDelete = this.userWaliModel.destroy({
      where: {
        id,
      },
    });

    return waliDelete;
  }


}

module.exports = UserService;