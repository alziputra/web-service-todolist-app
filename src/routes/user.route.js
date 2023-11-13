const express = require("express");
const route = express.Router();
const { getAllUser, getUserById, addUser, editUserById, deleteUserById } = require("../controllers/user.controller");

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.post("/", addUser);
route.put("/:id", editUserById);
route.delete("/:id", deleteUserById);

module.exports = route;
