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

const login = (request, response) => {
  const loginData = getLoginDataFromRequestBody(request.body);
  // Validate inputs
  // Find email
  // compare passwords
  sendResponseWithJSend(response, "OK", loginData);
};

const getLoginDataFromRequestBody = getFieldFromObject("email", "password");

const logout = () => {};

module.exports = { signup, login, logout };
