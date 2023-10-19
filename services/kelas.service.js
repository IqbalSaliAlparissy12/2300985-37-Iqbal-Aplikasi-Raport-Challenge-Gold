const { tblKelas } = require("../models");

class KelasService {
  constructor() {
    this.newKelas = tblKelas;
  }



  async addKelas(payload) {
    const date = new Date();
    const { kelas, strKelasDetail } = payload;
    const inputKelas = this.newKelas.create({
      kelas,
      strKelasDetail,
      createdAt: date,
      updatedAt: date,
    });
    return inputKelas;
  }

  async getKelas(id) {
    let data;
    if (id) {
      data = await this.newKelas.findOne({
        where: {
          id,
        },
      });
    } else {
      data = await this.newKelas.findAll();
    }
    return data;
  }
  //
  async updateKelas(payload) {
    try {
      const { kelas, strKelasDetail } = payload;

      // const kelasUpdate = await this.newKelas.findOne({
      //   where: { id:id },
      // });

      // if (!kelasUpdate) {
      //   throw new Error("Buku tidak ditemukan.");
      // }

      await this.newKelas.update({
        kelas,
        strKelasDetail,
      });

      return kelasUpdate;
    } catch (error) {
      console.error("Gagal memperbarui Kelas:", error);
      throw error;
    }
  }

  async delete(id) {
    const kelasDelete = this.newKelas.destroy({
      where: {
        id,
      },
    });

    return kelasDelete;
  }
}

module.exports = KelasService;
