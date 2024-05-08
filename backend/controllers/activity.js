const { Activity } = require("../models");

module.exports = class ActivityController {
  static async getAllActivities(req, res) {
    try {
      const activities = await Activity.findAll();
      res.status(200).json(activities);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
