const express = require("express");
const route = express.Router();

const loginRoute = require("./auth.route");
const todoRoute = require("./todo.route");
const userRoute = require("./user.route");

route.get("/", (req, res) => {
  res.json("Welcome to my app todo list sequelize migration");
});

route.use("/api/login", loginRoute);
route.use("/api/todos", todoRoute);
route.use("/api/users", userRoute);

module.exports = route;
