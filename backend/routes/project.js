const express = require("express");
const router = express.Router();
const ProjectController = require("../controllers/project");

router.get("/", ProjectController.getAllProjects); // This is the route that the frontend will call to get all projects

module.exports = router;
