'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblKelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tblKelas.init({
    Kelas: DataTypes.STRING,
    strKelasDetail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblKelas',
  });
  return tblKelas;
};