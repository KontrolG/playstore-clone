const User = require("../models").user;

const getHashedPassword = password => password; // dummy

const signup = async (request, response, next) => {
  // validation
  const { firstName, lastName, email, password, roleId } = request.body;
  // encrypt password
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: getHashedPassword(password),
      roleId
    });
    // save to the database
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }

  // send success message
  response.status(200).json({
    status: "success"
  });
};

const login = () => {};
const logout = () => {};

module.exports = { signup, login, logout };
