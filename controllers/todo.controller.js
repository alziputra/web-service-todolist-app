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
};
