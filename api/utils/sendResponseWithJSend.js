const { httpCodes } = require("./httpStatusCode");
const getJSend = require("./getJSend");

const sendResponseWithJSend = (response, status, data) => {
  const statusCode = httpCodes[status];
  const jSend = getJSend(statusCode, data);
  response.status(statusCode).json(jSend);
};

module.exports = sendResponseWithJSend;
