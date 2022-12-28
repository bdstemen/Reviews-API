import pool from '../../database/index.js'

const helpful = (reqData) => {
  const query: string = `
    UPDATE reviews
    SET helpfulness = helpfulness + 1
    WHERE id = $1`;

  const data: number[] = [reqData.review_id];

  return pool.query(query, data);
};

export default helpful;