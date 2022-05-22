"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        productName: "Iphone X",
        productPoint: 320,
        productDescription: "lorem ipsum dolot sit amet ",
        productStock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: "Iphone 11 Pro Max",
        productPoint: 1000,
        productDescription: "lorem ipsum dolot sit amet ",
        productStock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: "Iphone XR",
        productPoint: 120,
        productDescription: "lorem ipsum dolot sit amet ",
        productStock: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
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
    await queryInterface.bulkDelete("Products", null, {});
  },
};
