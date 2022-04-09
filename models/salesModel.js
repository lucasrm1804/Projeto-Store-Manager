const connection = require('./mysql-connection');

const getAll = async () => {
  const [sales] = await connection
   .execute(`SELECT sale_id as saleId, product_id as productId, quantity, id,
   date FROM StoreManager.sales_products
   inner join StoreManager.sales as sa where sale_id = sa.id
   order by sale_id, product_id`);
  return sales;
};

const getById = async (id) => {
  const [sale] = await connection
    .execute(`SELECT product_id as productId, quantity, date 
    FROM StoreManager.sales_products
    inner join StoreManager.sales as sa on sale_id = sa.id
    where sale_id = ?
    order by sale_id, product_id`, [id]);
  return sale;
};

const createSales = async (sales) => {
  const [{ insertId }] = await connection
  .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
  const salesCadastradas = sales.map(async (sale) => {
    await connection
    .execute(`INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`, [insertId, sale.productId, sale.quantity]);
  });
  await Promise.all(salesCadastradas);
  return insertId;
};

const updateSales = async (id, productId, quantity) => {
  await connection.execute(`UPDATE StoreManager.sales_products
  SET quantity = ?  WHERE sale_id = ? and product_id = ?`,
  [quantity, id, productId]);
};

module.exports = {
  getAll,
  getById,
  createSales,
  updateSales,
};