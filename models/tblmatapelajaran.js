'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblMataPelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tblMataPelajaran.init({
    strMataPelajaran: DataTypes.STRING,
    strKelas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblMataPelajaran',
  });
  return tblMataPelajaran;
};