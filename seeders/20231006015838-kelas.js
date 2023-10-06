"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const date = new Date();
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "tblKelas",
      [
        {
          kelas: "1",
          strKelasDetail: "1A Zubair",
          createdAt: date,
          updatedAt: date,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * */
    await queryInterface.bulkDelete("tblKelas", null, {});
  },
};
