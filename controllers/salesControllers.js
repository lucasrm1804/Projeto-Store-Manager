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
    // console.log(await salesService.getbyId(id));
    return res.status(200).json(await salesService.getbyId(id));
  } catch (err) {
      return res.status(404).json({ message: err.message });
  }
};
module.exports = {
  getAll,
  getbyId,
};
