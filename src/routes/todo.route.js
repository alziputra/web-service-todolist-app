const express = require("express");
const route = express.Router();

const tokenChecker = require('../middlewares/tokenChecker');
const { getAllTodo, getTodoById, addTodo, editTodoById, deleteTodoById } = require("../controllers/todo.controller");



route.get("/", getAllTodo);
route.get("/:id", tokenChecker, getTodoById);
route.post("/", tokenChecker, addTodo);
route.put("/:id", editTodoById);
route.delete("/:id", deleteTodoById);

module.exports = route;
