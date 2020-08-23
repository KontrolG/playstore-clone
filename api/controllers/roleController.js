const Role = require("../models").role;

const getRoles = async (request, response) => {
  const roles = await Role.findAll();
  response.status(200).json(roles);
};

module.exports = { getRoles };
