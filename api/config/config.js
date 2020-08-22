const {
  SEQUELIZE_DATABASE,
  SEQUELIZE_USERNAME,
  SEQUELIZE_PASSWORD,
  SEQUELIZE_HOST,
  SEQUELIZE_DIALECT
} = process.env;

const commonConfig = {
  username: SEQUELIZE_USERNAME,
  password: SEQUELIZE_PASSWORD,
  database: SEQUELIZE_DATABASE,
  host: SEQUELIZE_HOST,
  dialect: SEQUELIZE_DIALECT
};

module.exports = {
  development: commonConfig,
  test: commonConfig,
  production: commonConfig
};
