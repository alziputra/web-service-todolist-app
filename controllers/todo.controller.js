const {Todolist} = require("../models");

module.exports = {
  getAlltodo: async (req, res) => {
    const todos = Todolist.findAll();

    res.json({
      message: "success get all todos",
      data: todos
    })
  },

  getTodoById: async (req, res) => {},
  createTodo: async (req, res) => {},
  updateTodo: async (req, res) => {},
  deleteTodo: async (req, res) => {},
};
