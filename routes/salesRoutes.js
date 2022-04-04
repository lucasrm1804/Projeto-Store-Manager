const express = require('express');
const salesControllers = require('../controllers/salesControllers');

const routes = express.Router();

routes.get('/', salesControllers.getAll);

routes.get('/:id', salesControllers.getbyId);

module.exports = routes;
