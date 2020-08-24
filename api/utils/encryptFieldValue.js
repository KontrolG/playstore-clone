const getEncryptedValue = require("./getEncryptedValue");

const encryptFieldValue = field => async instance => {
  const encryptedFieldValue = await getEncryptedValue(instance[field]);
  instance[field] = encryptedFieldValue;
};

module.exports = encryptFieldValue;
