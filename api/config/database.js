const commonConfig = {
  username: "postgres",
  password: 1234,
  database: "challenge-javascript-alkemy-labs",
  host: "localhost",
  port: 5432,
  dialect: "postgres"
};

module.exports = {
  development: commonConfig,
  test: commonConfig,
  production: commonConfig
};
