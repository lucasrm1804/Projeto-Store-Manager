const salesService = require('../services/salesService');

const getAll = async (req, res) => {
  try {
    return res.status(200).json(await salesService.getAll());
  } catch (err) {
      return res.status(404).json({ message: err.message });
  }  
};

const getbyId = async (req, res) => {
  try {
    const { id } = req.params;
    return res.status(200).json(await salesService.getbyId(id));
  } catch (err) {
      return res.status(404).json({ message: err.message });
  }
};

const createSales = async (req, res) => {
  try {
    const sales = await salesService.createSales(req.body);
    return res.status(201).json(sales);
  } catch (err) {
      return res.status(409).json({ message: err.message });
  }
};

const updateSales = async (req, res) => {
  const [{ productId, quantity }] = req.body;
  const { id } = req.params;
  try {
    await salesService.updateSales(id, productId, quantity);
    
    return res.status(200).json({ saleId: id, itemUpdated: [{ productId, quantity }] });
  } catch (err) {
      return res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getbyId,
  createSales,
  updateSales,
};
