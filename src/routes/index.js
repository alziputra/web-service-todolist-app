const express = require("express");
const route = express.Router();

const todoRoute = require("./todo.route");

route.get("/", (req, res) => {
  res.json("Welcome to my app todo list sequelize migration");
});

route.use("/todos", todoRoute);

module.exports = route;
