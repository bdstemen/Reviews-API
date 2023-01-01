import pool from '../../database/index.js'

const getReviews = {
  reviews: (reqData) => {
    const sortMethods = {
      helpful: 'helpfulness DESC',
      newest: 'date DESC',
      relevant: 'helpfulness DESC, date DESC'
    };

    const query = `
      SELECT
        review_id,
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
      AND reported = false
      ORDER BY ${sortMethods[reqData.sort]}
      LIMIT $2
      OFFSET $3`;

    const data = [reqData.product_id, reqData.count, (reqData.count * (reqData.page - 1))];

    const queryName = 'select review data from reviews table';

    return pool.query(query, data, queryName);
  },

  photos: (review_id) => {
    const query = `
      SELECT id, url FROM reviews_photos
      WHERE review_id = $1`;

    const data = [review_id];

    const queryName = 'select review photos from photos table';

    return pool.query(query, data, queryName);
  }
};

export default getReviews;
