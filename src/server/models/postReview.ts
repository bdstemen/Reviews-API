import pool from '../../database/index.js'

const postReview = (reqBody) => {
  const queryString = `
    INSERT INTO reviews (
      product_id,
      rating,
      date,
      summary,
      body,
      recommend,
      reviewer_name,
      reviewer_email
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id`;

  const values = [reqBody.product_id, reqBody.rating, new Date().toISOString(), reqBody.summary, reqBody.body, reqBody.recommend, reqBody.reviewer_name, reqBody.reviewer_email];

  return pool.query(queryString, values)
    .then((response) => {
      return response.rows[0].id;
    })
    .catch((err) => {
      return err;
    })
};

export default postReview;