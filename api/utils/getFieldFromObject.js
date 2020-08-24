const getFieldFromObject = (...fields) => object => {
  const toFieldObject = key => ({ [key]: object[key] });
  const fieldsObjects = fields.map(toFieldObject);
  return Object.assign(...fieldsObjects);
};

module.exports = getFieldFromObject;
