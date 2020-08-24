const catchAsyncHandler = require("../utils/catchAsyncHandler");
const sendResponseWithJSend = require("../utils/sendResponseWithJSend");

const getAll = Model =>
  catchAsyncHandler(async (request, response) => {
    const results = await Model.findAll();
    sendResponseWithJSend(response, "OK", { [Model.tableName]: results });
  });

const getById = Model =>
  catchAsyncHandler(async ({ params }, response) => {
    const { id } = params;
    const result = await Model.findByPk(id);
    if (!result) throw new Error("Not Found");
    sendResponseWithJSend(response, "OK", { [Model.name]: result });
  });

module.exports = { getAll, getById };
