const express = require('express');
const salesControllers = require('../controllers/salesControllers');
const salesMiddle = require('../middlewares/salesMiddleware');

const routes = express.Router();

routes.get('/', salesControllers.getAll);
routes.get('/:id', salesControllers.getById);
routes.post('/', salesMiddle, salesControllers.createSales);
routes.put('/:id', salesMiddle, salesControllers.updateSales);

module.exports = routes;
