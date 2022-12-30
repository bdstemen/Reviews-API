import pool from '../../database/index.js'

const getReviews = {
  reviews: (reqData) => {
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
