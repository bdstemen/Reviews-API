import pool from '../../database/index.js'

const helpful = (reqData) => {
  const query: string = `
    UPDATE reviews
    SET helpfulness = helpfulness + 1
    WHERE review_id = $1`;

  const data: number[] = [reqData.review_id];

  const queryName = 'mark review helpful';

  return pool.query(query, data, queryName);
};

export default helpful;