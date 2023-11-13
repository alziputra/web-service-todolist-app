const express = require("express");
const route = express.Router();

const tokenChecker = require("../middlewares/tokenChecker");
const { getAllTodo, getTodoById, addTodo, editTodoById, deleteTodoById } = require("../controllers/todo.controller");

route.get("/", tokenChecker, getAllTodo);
route.get("/:id", tokenChecker, getTodoById);
route.post("/", tokenChecker, addTodo);
route.put("/:id", tokenChecker, editTodoById);
route.delete("/:id", tokenChecker, deleteTodoById);

module.exports = route;
