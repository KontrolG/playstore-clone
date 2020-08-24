const { getAll, getById } = require("./commonHandlers");
const Role = require("../models").role;

const getRoles = getAll(Role);
const getRoleById = getById(Role);

module.exports = { getRoles, getRoleById };
