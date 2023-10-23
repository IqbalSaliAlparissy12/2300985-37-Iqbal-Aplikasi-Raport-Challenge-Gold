'use strict';

const bcrypt = require('bcrypt'); // Impor modul bcrypt

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = '123'; // Kata sandi yang akan dihash
    const saltRounds = 10; // Jumlah putaran salt (biasanya antara 10 dan 12)
    const date = new Date();

    try {
      // Hash kata sandi dengan bcrypt
      const hash = await bcrypt.hash(password, saltRounds);

      // Masukkan data yang sudah dihash ke dalam tabel
      await queryInterface.bulkInsert('tblUsers', [{
        strName: "rusia",
        strEmail: "rusia@gmail.com",
        strRole: "admin",
        strPassword: hash,
        createdAt: date,
        updatedAt: date
      }], {});
    } catch (err) {
      // Tangani kesalahan jika terjadi
      console.error('Terjadi kesalahan saat hashing atau memasukkan data:', err);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tblUsers', null, {});
  }
};
