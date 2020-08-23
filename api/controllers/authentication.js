const User = require("../models/user");

const signup = (request, response, next) => {
  // validation
  const { firstName, lastName, email, password, roleId } = request.body;
  // encrypt password
  // save to the database
  console.log({ fistName, lastName, email, password, roleId });
  // send success message
  response.status(200).json({
    status: "success"
  });
};

const login = () => {};
const logout = () => {};

module.exports = { signup, login, logout };
