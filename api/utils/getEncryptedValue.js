const bcrypt = require("bcryptjs");

const getEncryptedValue = async value => {
  const salt = 6; // Due to perform issues
  let hash;
  try {
    hash = await bcrypt.hash(value, salt);
  } catch (error) {
    throw error;
  }
  return hash;
};

module.exports = getEncryptedValue;
