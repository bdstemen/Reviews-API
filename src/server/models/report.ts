import pool from '../../database/index.js'

const report = (reqBody) => {
  return pool.query(`SELECT * FROM reviews WHERE id=${reqBody.review_id};`)

};

export default report;