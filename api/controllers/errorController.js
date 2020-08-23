const globalErrorHandler = (error, request, response, next) => {
  response.status(error.status).json(error);
};

module.exports = globalErrorHandler;
