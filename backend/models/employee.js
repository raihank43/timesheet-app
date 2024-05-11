"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.hasMany(models.Activity, { foreignKey: "EmployeeId" });
    }
  }
  Employee.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name cannot be empty",
          },
        },
      },
      rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Rate is required",
          },
          isInt: {
            msg: "Rate must be an integer",
          },
          min: {
            args: [1],
            msg: "Rate must be greater than 0",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
