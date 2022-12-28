import pool from '../../database/index.js'

const report = (reqData) => {
  const query: string = `
    UPDATE reviews
    SET reported = true
    WHERE id = $1`;

  const data: number[] = [reqData.review_id];

  return pool.query(query, data);
};

export default report;