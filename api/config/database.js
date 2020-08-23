const commonConfig = {
  username: "<YOUR_USERNAME>",
  password: "<YOUR_PASSWORD",
  database: "<YOUR_DATABASE>",
  host: "<YOUR_HOST>",
  port: "<YOUR_PORT>",
  dialect: "<YOUR_DIALECT>"
};

module.exports = {
  development: commonConfig,
  test: commonConfig,
  production: commonConfig
};
