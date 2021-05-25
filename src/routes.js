const express = require('express');

const routes = express.Router();
const usersController = require('./controllers/usersControllers');

routes.post('/users', usersController.createUsers);
routes.get('/users', usersController.getAllUser);
routes.get('/users/:id', usersController.getOneUser);
routes.patch('/users/:id', usersController.updateUser);
routes.delete('/users/:id', usersController.destroyUser);
// routes.patch('/endUser/:user_id', usersController.updataAdressUser);

module.exports = routes;
