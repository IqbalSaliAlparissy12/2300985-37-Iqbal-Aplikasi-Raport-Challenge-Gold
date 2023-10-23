const { tblAbsensi } = require("../models");

class AbsensiService {
  constructor() {
    this.newAbsensi = tblAbsensi;
  }

  async getAbsensi() {
    try {
      return await this.newAbsensi.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async getAbsensiId(id) {
    try {
      return await this.newAbsensi.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  //edit kelas
  async updateAbsensi(id, payload) {
    try {
      const { strNamaSiswa, intSakit, intIzin, intAlpa, strKelas } = payload;

      const absensiUpdate = await this.newAbsensi.findOne({
        where: { id: id },
      });

      if (!absensiUpdate) {
        throw new Error("Absensi tidak ditemukan.");
      }

      await absensiUpdate.update({
        strNamaSiswa,
        intSakit,
        intIzin,
        intAlpa,
        strKelas,
      });

      return absensiUpdate;
    } catch (error) {
      console.error("Gagal memperbarui absensi:", error);
      throw error;
    }
  }

  async addAbsensi(payload) {
    const date = new Date();
    const { strNamaSiswa, intSakit, intIzin, intAlpa, strKelas } = payload;

    const inputAbsensi = this.newAbsensi.create({
      strNamaSiswa: strNamaSiswa,
      intSakit: intSakit,
      intIzin: intIzin,
      intAlpa: intAlpa,
      strKelas: strKelas,
      createdAt: date,
      updatedAt: date,
    });
    return inputAbsensi;
  }

  async delete(id) {
    const absensiDelete = this.newAbsensi.destroy({
      where: {
        id,
      },
    });

    return absensiDelete;
  }
}

module.exports = AbsensiService;
