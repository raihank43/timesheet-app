const express = require("express");
const router = express.Router();
const ActivityController = require("../controllers/activity");

router.get("/", ActivityController.getAllActivities); // This is the route that the frontend will call to get all activities
router.get("/:EmployeeId", ActivityController.getEmployeeActivities); // This is the route that the frontend will call to get all activities for a specific employee
router.post("/:EmployeeId", ActivityController.createActivity); // This is the route that the frontend will call to add an activity for a specific employee
router.put("/:id", ActivityController.updateActivity); // This is the route that the frontend will call to update an activity

module.exports = router;
