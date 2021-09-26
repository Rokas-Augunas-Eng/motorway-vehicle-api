const sequelize = require("../config/sequelize");
const { Sequelize } = require("sequelize");

module.exports = sequelize.define("vehicles", {
  id: {
    field: "id",
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  make: {
    field: "make",
    type: Sequelize.STRING,
  },
  model: {
    field: "model",
    type: Sequelize.STRING,
  },
  createdAt: {
    field: "created_at",
    type: Sequelize.DATE,
  },
  updatedAt: {
    field: "updated_at",
    type: Sequelize.DATE,
  },
});
