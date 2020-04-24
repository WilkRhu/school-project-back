const express = require('express');
const routes = express.Router();
const usersController = require('./controllers/usersControllers');

routes.post('/users', usersController.createUsers);


module.exports = routes;