const express = require("express");
const router = express.Router();
const Vehicles = require("../models/vehicle");
const { Sequelize } = require("sequelize");
const { Op } = Sequelize;

// Get vehicle list
router.get("/", (req, res) => {
  let filter = {};
  let { q } = req.query;

  if (q) {
    filter = {
      where: {
        make: {
          [Op.like]: `${q}%`, // search for an car make starting with a specific letter - for example vehicles/?q=b
        },
      },
    };
  }

  Vehicles.findAll(filter)
    .then((vehicles) => res.json(vehicles))
    .catch((err) => res.send("error", { error: err }));
});

// Get vehicle by id
router.get("/:id", (req, res) => {
  let { id } = req.params;

  Vehicles.findByPk(id)
    .then((vehicle) => res.json(vehicle))
    .catch((err) => res.send("error", { error: err }));
});

module.exports = router;
