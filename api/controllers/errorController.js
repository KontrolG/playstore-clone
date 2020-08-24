const { httpCodes } = require("../utils/httpStatusCode");
const getJSend = require("../utils/getJSend");

const globalErrorHandler = (error, request, response, next) => {
  const { statusCode, jSend } = getResponseError(error);

  response.status(statusCode).json(jSend);
};

const getResponseError = error => {
  if (isUniqueConstraintError(error)) {
    return getUniqueConstraintErrorResponse(error);
  }
  if (isValidationError(error)) {
    return getValidationErrorResponse(error);
  }

  // return { statusCode, jSend };
};

const isUniqueConstraintError = ({ name }) =>
  name === "SequelizeUniqueConstraintError";

const getSequelizeErrorResponse = getMessageFunction => error => {
  const statusCode = httpCodes["Bad Request"];
  const message = getMessageFunction(error);
  const jSend = getJSend(statusCode, message);
  return { statusCode, jSend };
};

const getMessageFromValidationErrors = ({ errors }) => {
  const errorsObjects = errors.map(toErrorObject);
  return Object.assign(...errorsObjects);
};

const toErrorObject = ({ path, message }) => ({ [path]: message });

const getValidationErrorResponse = getSequelizeErrorResponse(
  getMessageFromValidationErrors
);

const getMessageFromDatabaseError = ({ parent }) => {
  // Ya existe la llave (email)=(kontrolg@test.com).
  const message = parent.detail;
  console.log(message);
  return message;
};

const getUniqueConstraintErrorResponse = getSequelizeErrorResponse(
  getMessageFromDatabaseError
);

const isValidationError = ({ name }) => name === "SequelizeValidationError";

module.exports = globalErrorHandler;
