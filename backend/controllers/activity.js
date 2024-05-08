const { Activity, Project } = require("../models");
const calculateDuration = require("../utils/calculateDuration");

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

  static async createActivity(req, res) {
    try {
      const { EmployeeId } = req.params;
      const { title, ProjectId, startDate, endDate, timeStart, timeEnd } =
        req.body;
      const duration = calculateDuration(timeStart, timeEnd);
      const activity = await Activity.create({
        title,
        ProjectId,
        EmployeeId,
        startDate,
        endDate,
        timeStart,
        timeEnd,
        duration, // This is the duration calculated using the calculateDuration function
      });
      res.status(201).json(activity);
    } catch (error) {
      error.name === "SequelizeValidationError"
        ? res.status(400).json({ message: error.errors[0].message })
        : res.status(400).json({ message: error.message });
    }
  }

  static async updateActivity(req, res) {
    try {
      const { id } = req.params;
      const { title, ProjectId, startDate, endDate, timeStart, timeEnd } =
        req.body;
      const duration = calculateDuration(timeStart, timeEnd);
      const activity = await Activity.findByPk(id);
      if (!activity) {
        return res.status(404).json({ message: "Activity not found" });
      }
      await activity.update({
        title,
        ProjectId,
        startDate,
        endDate,
        timeStart,
        timeEnd,
        duration,
      });
      res.status(200).json(activity);
    } catch (error) {
      error.name === "SequelizeValidationError"
        ? res.status(400).json({ message: error.errors[0].message })
        : res.status(400).json({ message: error.message });
    }
  }

  static async deleteActivity(req, res) {
    try {
      const { id } = req.params;
      const activity = await Activity.findByPk(id);
      if (!activity) {
        return res.status(404).json({ message: "Activity not found" });
      }
      await activity.destroy();
      res
        .status(200)
        .json({ message: `Activity ${activity.title} succesfully deleted` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
