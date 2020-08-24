const { httpCodes } = require("../utils/httpStatusCode");
const getJSend = require("../utils/getJSend");

const globalErrorHandler = (error, request, response, next) => {
  console.log(error);
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

  return { statusCode: 404, jSend: { error } };
};

const isUniqueConstraintError = ({ name }) =>
  name === "SequelizeUniqueConstraintError";

const getSequelizeErrorResponse = getErrorsFunction => error => {
  const statusCode = httpCodes["Bad Request"];
  const errors = getErrorsFunction(error);
  const message =
    "There was a problem with the data submitted, or some validation wasn't satisfied";
  const jSend = getJSend(statusCode, message, errors);
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
