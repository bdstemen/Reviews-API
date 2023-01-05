import pool from '../../database/index.js'

const report = (reqData) => {
  const query: string = `
    UPDATE reviews
    SET reported = true
    WHERE review_id = $1`;

  const data: number[] = [reqData.review_id];

  // const queryName = 'mark review reported';

  return pool.query(query, data);
};

export default report;