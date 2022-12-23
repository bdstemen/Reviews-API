import pool from '../../database/index.js'

const helpful = (reqData) => {
  return pool.query(`SELECT * FROM reviews WHERE id=${reqData.review_id};`)

};

export default helpful;