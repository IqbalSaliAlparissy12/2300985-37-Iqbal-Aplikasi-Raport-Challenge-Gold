const { tblMataPelajaran } = require("../models");

class MapelService {
  constructor() {
    this.newMapel = tblMataPelajaran;
  }

  async getMapel() {
    try {
      return await this.newMapel.findAll();
    } catch (error) {
      console.log(error);
    }
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
  }

    //edit kelas
    async updateMapel(id, payload) {
      try {
        const { strMataPelajaran, strKelas } = payload;
  
        const mapelUpdate = await this.newMapel.findOne({
          where: { id:id },
        });
  
        if (!mapelUpdate) {
          throw new Error("Kelas tidak ditemukan.");
        }
  
        await mapelUpdate.update({
          strMataPelajaran,
          strKelas,
        });
  
        return mapelUpdate;
      } catch (error) {
        console.error("Gagal memperbarui Kelas:", error);
        throw error;
      }
    }

  async addMapel(payload) {
    const date = new Date();
    const { strMataPelajaran, strKelas } = payload;
    const inputMapel = this.newMapel.create({
      strMataPelajaran : strMataPelajaran,
      strKelas: strKelas,
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
