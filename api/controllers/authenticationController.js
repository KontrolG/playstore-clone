const User = require("../models").user;
const catchAsyncHandler = require("../utils/catchAsyncHandler");

const getUserDataFromRequestBody = ({
  firstName,
  lastName,
  email,
  password,
  roleId
}) => ({ firstName, lastName, email, password, roleId });

const signup = catchAsyncHandler(async (request, response) => {
  const userData = getUserDataFromRequestBody(request.body);
  const newUser = await User.create(userData);
  response.status(200).json(newUser);
});

const login = (request, response) => {
  const { email, password } = request.body;
  // Validate inputs
  // Find email
  // compare passwords
};
const logout = () => {};

module.exports = { signup, login, logout };
