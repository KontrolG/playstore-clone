const bcrypt = require("bcryptjs");

const comparePasswordWithEncryptedPassword = (password, encryptedPassword) =>
  bcrypt.compare(password, encryptedPassword);

module.exports = comparePasswordWithEncryptedPassword;
