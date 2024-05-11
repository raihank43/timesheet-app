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
  static async addProject(req, res) {
    try {
      const { name } = req.body;
      const project = await Project.create({ name });
      res.status(201).json(project);
    } catch (error) {
      error.name = "SequelizeValidationError"
        ? res.status(400).json({ message: error.errors[0].message })
        : res.status(400).json({ message: error.message });
    }
  }
};
