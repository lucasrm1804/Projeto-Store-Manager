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

const createSales = async (sales) => {
  try {
    const saleId = await salesModel.createSales(sales);
    return {
      id: saleId,
      itemsSold: sales,
    };
  } catch (error) {
    return error;
  }
};

const updateSales = async (id, productId, quantity) => {
  await salesModel.updateSales(id, productId, quantity);
};

module.exports = {
  getAll,
  getbyId,
  createSales,
  updateSales,
};