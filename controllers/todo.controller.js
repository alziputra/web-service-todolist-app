const { Todolist } = require("../models");

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      // Menggunakan await untuk menunggu hasil query
      const todos = await Todolist.findAll();

      // Mengirim response
      res.json({
        message: "success get all todos",
        data: todos,
      });
    } catch (error) {
      // Menangani kesalahan jika terjadi
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },

  getTodoById: async (req, res) => {
    const { id } = req.params;

    try {
      // Menggunakan await untuk menunggu hasil query dengan parameter id
      const todo = await Todolist.findByPk(id);

      // Mengirim response
      if (todo) {
        res.json({
          message: "Berhasil mendapatkan todo by id",
          data: todo,
        });
      } else {
        res.status(404).json({
          message: "Todo not found",
        });
      }
    } catch (error) {
      // Menangani kesalahan jika terjadi
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },

  addTodo: async (req, res) => {
    let data = req.body;

    try {
      // Menggunakan await untuk menunggu hasil operasi create
      await Todolist.create(data);

      // Mengirim response
      res.status(201).json({
        message: "Berhasil menambahkan todo",
      });
    } catch (error) {
      // Menangani kesalahan jika terjadi
      res.status(500).json({
        message: "Gagal menambahkan todo",
        error: error.message,
      });
    }
  },

  editTodoById: async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
      const todo = await Todolist.findByPk(id);

      if (todo) {
        // Menggunakan metode update untuk mengganti data yang ada
        await todo.update(newData);

        res.json({
          message: "Successfully edited todo by id",
          data: todo,
        });
      } else {
        res.status(404).json({
          message: "Todo not found",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },

  deleteTodoById: async (req, res) => {
    const { id } = req.params;

    try {
      const todo = await Todolist.findByPk(id);

      if (todo) {
        // Menggunakan metode destroy untuk menghapus data
        await todo.destroy();

        res.json({
          message: "Successfully deleted todo by id",
        });
      } else {
        res.status(404).json({
          message: "Todo not found",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
};
