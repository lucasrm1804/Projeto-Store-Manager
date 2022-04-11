const express = require('express');
const productsControllers = require('../controllers/productsControllers');
const productMiddle = require('../middlewares/PrductsMiddleware');

const routes = express.Router();

routes.get('/', productsControllers.getAll);
routes.get('/:id', productsControllers.getById);
routes.post('/', productMiddle, productsControllers.create);
routes.put('/:id', productMiddle, productsControllers.updateProduct);
routes.delete('/:id', productsControllers.deleteById);

module.exports = routes;
