import pool from '../../database/index.js';
import format from 'pg-format';

const postReview = {
  review: (reqBody) => {
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
  },

  photos: (photos, review_id) => {

    const photoRows = photos.map((url) => {
      return [review_id, url];
    });

    const queryString = format('INSERT INTO reviews_photos (review_id, url) VALUES %L', photoRows);

    return pool.query(queryString);
  },

  characteristics: (characteristics, review_id) => {

    const characteristicRows = Object.keys(characteristics).map((key) => {
      return [key, review_id, characteristics[key]];
    });

    const queryString = format('INSERT INTO characteristics_reviews (characteristic_id, review_id, value) VALUES %L', characteristicRows);

    return pool.query(queryString);
  }
};
export default postReview;