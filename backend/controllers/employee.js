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
};
