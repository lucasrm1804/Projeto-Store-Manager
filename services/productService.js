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

module.exports = {
  getAll,
  getbyId,
};