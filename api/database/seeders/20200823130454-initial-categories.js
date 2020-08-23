"use strict";

const getInitialCategories = () => {
  const musicCategory = { name: "Music", description: "What make you dance" };
  const gamingCategory = { name: "Gaming", description: "Enjoy with these" };
  const socialCategory = { name: "Social", description: "Share your life" };

  return [musicCategory, gamingCategory, socialCategory];
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = getInitialCategories();
    await queryInterface.bulkInsert("category", categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
