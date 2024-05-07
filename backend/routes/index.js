const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // This is the route that the frontend will call to check if the backend is running
  res.send("Hello World! from routes");
});

router.use("/employees", require("./employee")); // This is the route that the frontend will call to get all employees

module.exports = router; // Export the router so that it can be used in backend/app.js
