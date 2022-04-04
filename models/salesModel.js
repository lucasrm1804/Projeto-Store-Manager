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
    console.log(sale);
  return sale;
};

module.exports = {
  getAll,
  getById,
};