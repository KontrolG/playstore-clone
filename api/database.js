const database = require("./models");

const { sequelize } = database;

const connectDatabase = async () => {
  try {
    console.log("Connecting to the database");

    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDatabase;
