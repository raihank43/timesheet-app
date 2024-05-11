if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // Load .env file
}

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
