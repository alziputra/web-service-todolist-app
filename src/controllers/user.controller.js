const { User } = require("../models");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      // Menggunakan await untuk menunggu hasil query
      const users = await User.findAll();

      // Mengirim response
      res.json({
        message: "success get all users",
        data: users,
      });
    } catch (error) {
      // Menangani kesalahan jika terjadi
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;

    try {
      // Menggunakan await untuk menunggu hasil query dengan parameter id
      const user = await User.findByPk(id);

      // Mengirim response
      if (user) {
        res.json({
          message: "Successfully got todo by id",
          data: user,
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

  addUser: async (req, res) => {
    let data = req.body;

    try {
      // Menggunakan await untuk menunggu hasil operasi create
      await User.create(data);

      // Mengirim response
      res.status(201).json({
        message: "Successfully added user",
      });
    } catch (error) {
      // Menangani kesalahan jika terjadi
      res.status(500).json({
        message: "Failed to add user",
        error: error.message,
      });
    }
  },

  editUserById: async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
      const user = await User.findByPk(id);

      if (user) {
        // Menggunakan metode update untuk mengganti data yang ada
        await user.update(newData);

        res.json({
          message: "Successfully edited user by id",
          data: user,
        });
      } else {
        res.status(404).json({
          message: "User not found",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },

  deleteUserById: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);

      if (user) {
        // Menggunakan metode destroy untuk menghapus data
        await user.destroy();

        res.json({
          message: "Successfully deleted user by id",
        });
      } else {
        res.status(404).json({
          message: "User not found",
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
