const catchAsyncHandler = asyncHandler => async (request, response, next) => {
  try {
    await asyncHandler(request, response, next);
  } catch (error) {
    response.status(400).json(error.errors || error);
  }
};

module.exports = catchAsyncHandler;
