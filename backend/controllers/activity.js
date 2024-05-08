const { Activity, Project } = require("../models");

module.exports = class ActivityController {
  static async getAllActivities(req, res) {
    try {
      const activities = await Activity.findAll();
      res.status(200).json(activities);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getEmployeeActivities(req, res) {
    try {
      const { EmployeeId } = req.params;
      const activities = await Activity.findAll({
        include: [{ model: Project }],
        where: { EmployeeId },
      });
      res.status(200).json(activities);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
