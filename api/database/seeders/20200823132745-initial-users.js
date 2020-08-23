"use strict";

const getInitialUsers = () => {
  const johnFerguson = {
    firstName: "John",
    lastName: "Ferguson",
    nickname: "johnf",
    password: "1234",
    email: "johnf@client.com"
  };

  const janeDoe = {
    firstName: "Jane",
    lastName: "Doe",
    nickname: "janed",
    password: "4321",
    email: "janed@developer.com"
  };

  return [johnFerguson, janeDoe];
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = getInitialUsers();
    await queryInterface.bulkInsert("user", users, {});
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
