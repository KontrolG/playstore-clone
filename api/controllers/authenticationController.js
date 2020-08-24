const jwt = require("jsonwebtoken");
const { user: User, role: Role } = require("../models");
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

const getResponseContentFromAuthenticatedUser = async authenticatedUser => {
  const user = await getUserData(authenticatedUser);
  const token = await signUserToken(user.id);
  return { token, user };
};

const login = catchAsyncHandler(async (request, response) => {
  const loginData = getLoginDataFromRequestBody(request.body);
  const authenticatedUser = await User.authenticate(loginData);
  const content = await getResponseContentFromAuthenticatedUser(
    authenticatedUser
  );
  sendResponseWithJSend(response, "OK", content);
});

/* 
async function test(authenticatedUser, response) {
  const content = await getResponseContentFromAuthenticatedUser(authenticatedUser);
  sendResponseWithJSend(response, "OK", content);
}
*/

const signUserToken = id => {
  const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
};

const getUserData = async ({ id, firstName, lastName, roleId }) => {
  const userRole = await Role.findByPk(roleId);
  return { id, firstName, lastName, role: userRole.name };
};

const getLoginDataFromRequestBody = getFieldFromObject("email", "password");

const logout = () => {};

module.exports = { signup, login, logout };
