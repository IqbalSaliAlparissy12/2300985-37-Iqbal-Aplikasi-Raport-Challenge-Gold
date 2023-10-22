'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblIdentitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strNamaSekolah: {
        type: Sequelize.STRING
      },
      strNIS: {
        type: Sequelize.STRING
      },
      strAlamat: {
        type: Sequelize.STRING
      },
      strKodePos: {
        type: Sequelize.STRING
      },
      strTelpon: {
        type: Sequelize.STRING
      },
      strKelurahan: {
        type: Sequelize.STRING
      },
      strKecamatan: {
        type: Sequelize.STRING
      },
      strKabupaten: {
        type: Sequelize.STRING
      },
      strProvinsi: {
        type: Sequelize.STRING
      },
      strWebsite: {
        type: Sequelize.STRING
      },
      strEmail: {
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
    await queryInterface.dropTable('tblIdentitas');
  }
};