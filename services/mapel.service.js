const { tblMapel } = require("../models");

class MapelService {
  constructor() {
    this.newMapel = tblMapel;
  }

  async getMapel() {
    try {
      return await this.newMapel.findAll();
    } catch (error) {
      console.log(error);
    }

    return data;
  }

  async getMapelId(id) {
    try {
      return await this.newMapel.findOne({
        where:{
          id:id
        }
      });
    } catch (error) {
      console.log(error);
    }

    return data;
  }

    //edit kelas
    async updateMapel(id, payload) {
      try {
        const { strMataPelajaran, intKelasId } = payload;
  
        const kelasUpdate = await this.newKelas.findOne({
          where: { id:id },
        });
  
        if (!kelasUpdate) {
          throw new Error("Kelas tidak ditemukan.");
        }
  
        await kelasUpdate.update({
          strMataPelajaran,
          intKelasId,
        });
  
        return kelasUpdate;
      } catch (error) {
        console.error("Gagal memperbarui Kelas:", error);
        throw error;
      }
    }

  async addMapel(payload) {
    const date = new Date();
    const { strMataPelajaran, intKelasId } = payload;
    const inputMapel = this.newMapel.create({
      strMataPelajaran,
      intKelasId,
      kelas,
      createdAt: date,
      updatedAt: date,
    });
    return inputMapel;
  }

  async delete(id) {
    const mapelDelete = this.newMapel.destroy({
      where: {
        id,
      },
    });

    return mapelDelete;
  }
}

module.exports = MapelService;
