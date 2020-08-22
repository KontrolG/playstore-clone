const { Sequelize } = require("sequelize");

const {
  SEQUELIZE_DATABASE,
  SEQUELIZE_USERNAME,
  SEQUELIZE_PASSWORD,
  SEQUELIZE_HOST,
  SEQUELIZE_DIALECT
} = process.env;

const connectDatabase = async () => {
  const sequelize = new Sequelize(
    SEQUELIZE_DATABASE,
    SEQUELIZE_USERNAME,
    SEQUELIZE_PASSWORD,
    {
      host: SEQUELIZE_HOST,
      dialect: SEQUELIZE_DIALECT
    }
  );

  try {
    console.log("Connecting to the database", {
      SEQUELIZE_DATABASE,
      SEQUELIZE_USERNAME,
      SEQUELIZE_PASSWORD,
      SEQUELIZE_HOST,
      SEQUELIZE_DIALECT
    });

    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDatabase;
