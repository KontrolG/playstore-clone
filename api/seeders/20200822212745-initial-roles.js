"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const developerRole = {
      name: "developer"
    };
    const clientRole = {
      name: "client"
    };
    await queryInterface.bulkInsert("roles", [developerRole, clientRole], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};
