const { Employee } = require("../models");

module.exports = class EmployeeController {
  static async getEmployees(req, res) {
    try {
      const employees = await Employee.findAll();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async addEmployee(req, res) {
    try {
      const { name, rate } = req.body;
      const employee = await Employee.create({ name, rate });
      res.status(201).json(employee);
    } catch (error) {
      error.name === "SequelizeValidationError"
        ? res.status(400).json({ error: error.errors[0].message })
        : res.status(500).json({ error: error.message });
    }
  }
};
