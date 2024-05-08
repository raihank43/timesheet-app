const { Project } = require("../models");

module.exports = class ProjectController {
  static async getAllProjects(req, res) {
    try {
      const projects = await Project.findAll();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
