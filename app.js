const express = require("express");
const app = express();
const vehiclesRoutes = require("./routes/vehicles");

// Database
const db = require("./config/sequelize.js");

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error:" + err));

// Route which handle requests
app.use("/vehicles", vehiclesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
