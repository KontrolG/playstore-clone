const sendResponseWithJSend = require("../utils/sendResponseWithJSend");

const getAll = Model => async (request, response) => {
  const results = await Model.findAll();
  sendResponseWithJSend(response, "OK", { [Model.tableName]: results });
};

const getById = Model => async (request, response) => {
  const results = await Model.findAll();
  sendResponseWithJSend(response, "OK", { [Model.name]: results[0] });
};

module.exports = { getAll, getById };
