const express = require("express");
const route = express.Router();
const tokenChecker = require("../middlewares/tokenChecker");
const { getAllUser, getUserById, addUser, editUserById, deleteUserById } = require("../controllers/user.controller");

route.get("/", getAllUser);
route.get("/:id", tokenChecker, getUserById);
route.post("/", addUser);
route.put("/:id", editUserById);
route.delete("/:id", deleteUserById);

module.exports = route;
