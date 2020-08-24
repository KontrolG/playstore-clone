"use strict";
const { Model } = require("sequelize");
const encryptFieldValue = require("../utils/encryptFieldValue");
const comparePasswordWithEncryptedPassword = require("../utils/comparePasswordWithEncryptedPassword");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {}
    static async authenticate({ email, password }) {
      const user = await this.getUserByEmail(email);
      return this.getAuthenticatedUser(user, password);
    }

    static async getUserByEmail(email) {
      const user = await this.findOne({ where: { email } });
      if (!user) throw new Error("Invalid Email");
      return user;
    }

    static async getAuthenticatedUser(user, password) {
      const passwordMatchUserPassword = await comparePasswordWithEncryptedPassword(
        password,
        user.password
      );
      if (!passwordMatchUserPassword) throw new Error("Hola");
      return user;
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
          notEmpty: { msg: "Password field is required" },
          len: {
            args: [6, 20],
            msg: "Password must have a length between 6 and 20"
          }
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

  user.beforeCreate(encryptFieldValue("password"));

  return user;
};
