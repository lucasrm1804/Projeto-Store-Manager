const productModel = require('../models/productModel');

const getAll = async () => {
  try {
      const products = await productModel.getAll();    
      return products;
  } catch (error) {
    return error;
  }  
};

const getbyId = async (id) => {
  const [product] = await productModel.getById(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

const create = async (name, quantity) => {
  const [productByName] = await productModel.getByName(name);
  if (productByName) {
    throw new Error('Product already exists');
  }
  const product = await productModel.create(name, quantity);
  return product;
};

module.exports = {
  getAll,
  getbyId,
  create,
};