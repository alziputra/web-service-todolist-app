const express = require("express");
const route = express.Router();
const { getAlltodo } = require("../controllers/todo.controller");

route.get("/", getAlltodo);
// route.post();
// route.put();
// route.delete();


module.exports = route;
