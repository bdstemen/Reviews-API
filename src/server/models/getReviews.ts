import pool from '../../database/index.js'

const getReviews = (reqData) => {
  return pool.query(`SELECT * FROM reviews WHERE product_id=${reqData.product_id} LIMIT 10;`);
};

export default getReviews;