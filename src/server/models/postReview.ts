import pool from '../../database/index.js'

const postReview = (reqBody) => {
  return pool.query(`SELECT * FROM reviews WHERE product_id=${reqBody.product_id};`)

};

export default postReview;