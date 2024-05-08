"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUnique: async function (value, next) {
            try {
              const project = await Project.findOne({
                where: Sequelize.where(
                  Sequelize.fn("lower", Sequelize.col("name")),
                  Sequelize.fn("lower", value)
                ),
              });
              if (project) {
                return next("Project name already in use");
              }
              next();
            } catch (error) {
              next(error);
            }
          },
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name cannot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
