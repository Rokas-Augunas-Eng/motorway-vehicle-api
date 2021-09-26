const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("vehicle_api_test"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
