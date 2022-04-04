const productService = require('../services/productService');

const getAll = async (req, res) => {
  try {
    return res.status(200).json(await productService.getAll());
  } catch (err) {
      return res.status(404).json({ message: err.message });
  }  
};

const getbyId = async (req, res) => {
  try {
    const { id } = req.params;
    return res.status(200).json(await productService.getbyId(id));
  } catch (err) {
      return res.status(404).json({ message: err.message });
  }
};
module.exports = {
  getAll,
  getbyId,
};
