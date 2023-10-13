const { tblKelas } = require("../models");

class KelasService {
  constructor() {
    this.newKelas = tblKelas;
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

  async updateKelas(id, updatedFields) {
    try {
      const existingKelas = await this.newKelas.findOne({
        where: {
          id,
        },
      });

      if (!existingKelas) {
        throw new Error('Kelas tidak ditemukan');
      }

      const { kelas, strKelasDetail } = updatedFields;

      // Memperbarui kelas yang ada dengan updatedFields yang diberikan
      await existingKelas.update({
        kelas, strKelasDetail, createdAt: date, updatedAt: date
      });

      return existingKelas;
    } catch (error) {
      throw new Error(`Gagal memperbarui kelas: ${error.message}`);
    }
  }

  async delete(id) {
    const kelasDelete = this.newKelas.destroy({
        where: {
            id
        },
    });

    return kelasDelete
}
}

module.exports = KelasService;
