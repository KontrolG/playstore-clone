"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "First name field is required" }
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Last name field is required" }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { name: "email", msg: "Email already in use" },
        validate: {
          notEmpty: { msg: "Email field is required" },
          isEmail: { msg: "Email is invalid" }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Password field is required" }
        }
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Role field is required" }
        },
        references: {
          model: {
            tableName: "roles"
          },
          key: "id"
        }
      }
    },
    {
      sequelize,
      modelName: "user",
      timestamps: true,
      updatedAt: false,
      underscored: true
    }
  );

  // user.beforeCreate(encryptFieldValue("password"));

  return user;
};
