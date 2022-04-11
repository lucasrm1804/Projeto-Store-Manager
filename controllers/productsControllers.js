const productService = require('../services/productService');

const getAll = async (req, res) => {
  try {
    return res.status(200).json(await productService.getAll());
  } catch (err) {
      return res.status(404).json({ message: err.message });
  }  
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    return res.status(200).json(await productService.getById(id));
  } catch (err) {
      return res.status(404).json({ message: err.message });
  }
};

const create = async (req, res) => {
  const { name, quantity } = req.body;
  try {
    const product = await productService.create(name, quantity);
    
    return res.status(201).json(product);
  } catch (err) {
      return res.status(409).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  try {
    await productService.updateProduct(id, name, quantity);
    
    return res.status(200).json({ id, name, quantity });
  } catch (err) {
      return res.status(404).json({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    await productService.deleteById(id);
    return res.status(204).json();
  } catch (err) {
    return res.status(404).send({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateProduct,
  deleteById,
};
