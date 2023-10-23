'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblAbsensis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strNamaSiswa: {
        type: Sequelize.STRING
      },
      intSakit: {
        type: Sequelize.INTEGER
      },
      intIzin: {
        type: Sequelize.INTEGER
      },
      intAlpa: {
        type: Sequelize.INTEGER
      },
      strKelas: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tblAbsensis');
  }
};