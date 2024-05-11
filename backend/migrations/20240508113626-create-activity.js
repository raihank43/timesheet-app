"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Activities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      ProjectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Projects",
          key: "id",
        },
      },
      EmployeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Employees",
          key: "id",
        },
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
      },
      timeStart: {
        type: Sequelize.TIME,
      },
      timeEnd: {
        type: Sequelize.TIME,
      },
      duration: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Activities");
  },
};
