'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblIdentitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tblIdentitas.init({
    strNamaSekolah: DataTypes.STRING,
    strNIS: DataTypes.STRING,
    strAlamat: DataTypes.STRING,
    strKodePos: DataTypes.STRING,
    strTelpon: DataTypes.STRING,
    strKelurahan: DataTypes.STRING,
    strKecamatan: DataTypes.STRING,
    strKabupaten: DataTypes.STRING,
    strProvinsi: DataTypes.STRING,
    strWebsite: DataTypes.STRING,
    strEmail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblIdentitas',
  });
  return tblIdentitas;
};