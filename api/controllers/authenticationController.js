const User = require("../models").user;
const catchAsyncHandler = require("../utils/catchAsyncHandler");
const getFieldFromObject = require("../utils/getFieldFromObject");
const sendResponseWithJSend = require("../utils/sendResponseWithJSend");

const signup = catchAsyncHandler(async (request, response) => {
  const userData = getUserDataFromRequestBody(request.body);
  const newUser = await User.create(userData);
  sendResponseWithJSend(response, "Created", newUser);
});

const getUserDataFromRequestBody = getFieldFromObject(
  "firstName",
  "lastName",
  "email",
  "password",
  "roleId"
);

const login = catchAsyncHandler(async (request, response) => {
  const loginData = getLoginDataFromRequestBody(request.body);
  const authenticatedUser = await User.authenticate(loginData);

  sendResponseWithJSend(response, "OK", authenticatedUser);
});

const getLoginDataFromRequestBody = getFieldFromObject("email", "password");

const logout = () => {};

module.exports = { signup, login, logout };
