const { getAll } = require("./commonHandlers");
const Role = require("../models").role;

const getRoles = getAll(Role);

module.exports = { getRoles };
