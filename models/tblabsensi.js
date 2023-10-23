'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblAbsensi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tblAbsensi.init({
    strNamaSiswa: DataTypes.STRING,
    intSakit: DataTypes.INTEGER,
    intIzin: DataTypes.INTEGER,
    intAlpa: DataTypes.INTEGER,
    strKelas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblAbsensi',
  });
  return tblAbsensi;
};