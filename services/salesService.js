const salesModel = require('../models/salesModel');

const getAll = async () => {
  try {
      const sales = await salesModel.getAll();
      return sales;
  } catch (error) {
    return error;
  }  
};

const getbyId = async (id) => {
  const sale = await salesModel.getById(id);
  if (sale.length === 0) {
    throw new Error('Sale not found');
  }
  return sale;
};

module.exports = {
  getAll,
  getbyId,
};