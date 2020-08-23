// const bcryptjs = require("bcryptjs");

const encryptFieldValue = field => async instance => {
  const encryptedFieldValue =
    "hashed " + instance[field]; /* await hashPassword(user.password) */
  instance[field] = encryptedFieldValue;
};

module.exports = encryptFieldValue;
