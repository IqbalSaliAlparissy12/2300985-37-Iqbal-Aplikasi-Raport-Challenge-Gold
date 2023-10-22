'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblAllUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tblAllUser.init({
    strEmail: DataTypes.STRING,
    strPassword: DataTypes.STRING,
    strName: DataTypes.STRING,
    strRole: DataTypes.STRING,
    strKelas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblAllUser',
  });
  return tblAllUser;
};