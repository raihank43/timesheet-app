"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.belongsTo(models.Project, {
        foreignKey: "ProjectId",
      });
      Activity.belongsTo(models.Employee, {
        foreignKey: "EmployeeId",
      });
    }
  }
  Activity.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title is required",
          },
          notEmpty: {
            msg: "Title cannot be empty",
          },
        },
      },
      ProjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Projects",
          key: "id",
        },
      },
      EmployeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Employees",
          key: "id",
        },
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Start date is required",
          },
          notEmpty: {
            msg: "Start date cannot be empty",
          },
          isDate: {
            msg: "Start date must be a valid date",
          },
        },
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "End date is required",
          },
          notEmpty: {
            msg: "End date cannot be empty",
          },
          isDate: {
            msg: "End date must be a valid date",
          },
        },
      },
      timeStart: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Start time is required",
          },
          notEmpty: {
            msg: "Start time cannot be empty",
          },
          isTime: {
            msg: "Start time must be a valid time",
          },
        },
      },
      timeEnd: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: {
            msg: "End time is required",
          },
          notEmpty: {
            msg: "End time cannot be empty",
          },
          isTime: {
            msg: "End time must be a valid time",
          },
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Duration is required",
          },
          notEmpty: {
            msg: "Duration cannot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Activity",
    }
  );
  return Activity;
};
