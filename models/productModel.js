const connection = require('./mysql-connection');

const getAll = async () => {
  const [products] = await connection
    .execute('SELECT * FROM StoreManager.products');
  return products;
};

const getById = async (id) => {
  const [product] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return product;
};

const create = async (name, quantity) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)',
      [name, quantity]);
  return {
      id: insertId,
      name,
      quantity,
  };
};

const getByName = async (name) => {
  const [product] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE name = ?', [name]);
  return product; 
};

module.exports = {
  getAll,
  getById,
  create,
  getByName,
};