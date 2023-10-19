const { tblMapel } = require("../models");

class MapelService {
  constructor() {
    this.newMapel = tblMapel;
  }

  async getMapel(id) {
    let data;
    if (id) {
      data = await this.newMapel.findOne({
        where: {
          id,
        },
      });
    } else {
      data = await this.newMapel.findAll();
    }
    return data;
  }

  async addMapel(payload) {
    const date = new Date();
    const { strMataPelajaran, intKelasId } = payload;
    const inputMapel = this.newMapel.create({
      strMataPelajaran,
      intKelasId,
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
