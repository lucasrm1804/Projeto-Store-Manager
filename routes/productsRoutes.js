const express = require('express');
const productsControllers = require('../controllers/productsControllers');

const routes = express.Router();

routes.get('/', productsControllers.getAll);

routes.get('/:id', productsControllers.getbyId);

module.exports = routes;
