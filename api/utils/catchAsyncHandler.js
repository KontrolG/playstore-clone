const catchAsyncHandler = asyncHandler => async (request, response, next) => {
  try {
    await asyncHandler(request, response, next);
  } catch (error) {
    next(error);
  }
};

module.exports = catchAsyncHandler;
