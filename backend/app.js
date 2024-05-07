require("dotenv").config(); // Load .env file
const express = require("express");
const { json } = require("sequelize");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
