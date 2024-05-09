const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/employee");

router.get("/", EmployeeController.getEmployees); // This is the route that the frontend will call to get all employees
router.post("/", EmployeeController.addEmployee); // This is the route that the frontend will call to add an employee

module.exports = router;
