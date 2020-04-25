const express = require("express");
const routes = express.Router();
const usersController = require("./controllers/usersControllers");

routes.post("/users", usersController.createUsers);
routes.patch("/users/:id", usersController.updateUser);
routes.patch("/endUser/:user_id", usersController.updataAdressUser);

module.exports = routes;
