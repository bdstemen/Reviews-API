import pool from '../../database/index.js'

const getReviewPhotos = (review_id) => {
  const query = `
    SELECT id, url FROM reviews_photos
    WHERE review_id = $1`;

  const data = [review_id];

  return pool.query(query, data);
};

export default getReviewPhotos;