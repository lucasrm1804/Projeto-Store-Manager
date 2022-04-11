const productModel = require('../models/productModel');

const getAll = async () => {
  try {
      const products = await productModel.getAll();    
      return products;
  } catch (error) {
    return error;
  }  
};

const getById = async (id) => {
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

const updateProduct = async (id, name, quantity) => {
  const [getId] = await productModel.getById(id);
  if (!getId) {
    throw new Error('Product not found');
  }
  await productModel.updateProduct(id, name, quantity);
};

const deleteById = async (id) => {
  const [getId] = await productModel.getById(id);
  if (!getId) {
    throw new Error('Product not found');
  }
  await productModel.deleteById(id);
  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  updateProduct,
  deleteById,
};