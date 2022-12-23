import pool from '../../database/index.js'

const meta = (reqData) => {
  return pool.query(`SELECT * FROM reviews WHERE product_id=${reqData.product_id} LIMIT 10;`)

};

export default meta;