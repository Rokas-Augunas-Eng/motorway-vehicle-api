const express = require("express");
const app = express();

// Database
const db = require("./config/sequelize.js");

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error:" + err));

app.get("/", (req, res) => res.send("vehicle_api_test"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
