const express = require("express");
const router = express.Router();
const ActivityController = require("../controllers/activity");

router.get("/", ActivityController.getAllActivities); // This is the route that the frontend will call to get all activities

module.exports = router;
