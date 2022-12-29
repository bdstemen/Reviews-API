import pool from '../../database/index.js'

const getReviews = (reqData) => {
  const sortMethods = {
    helpful: `helpfulness DESC`,
    newest: `date DESC`,
    relevant: `helpfulness DESC date DESC`
  };

  const query = `
    SELECT
      id,
      rating,
      summary,
      recommend,
      response,
      body,
      date,
      reviewer_name,
      helpfulness
    FROM reviews
    WHERE product_id = $1
    ORDER BY $2
    LIMIT $3
    OFFSET $4`;

  const data = [reqData.product_id, sortMethods[reqData.sort], reqData.count, (reqData.count * (reqData.page - 1))];

  return pool.query(query, data);
};

export default getReviews;


// count = 5, page = 1
