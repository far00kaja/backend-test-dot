"use strict";
const { encrypt } = require("../../../functions/app");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Dicky",
        lastName: "Darmawan",
        email: "admin@admin.com",
        password: encrypt.encryption("asdasd123"),
        point: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Rimbi",
        lastName: "Dentry",
        email: "admin2@admin.com",
        password: encrypt.encryption("asdasd123"),
        createdAt: new Date(),
        updatedAt: new Date(),
        point: 123,
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
