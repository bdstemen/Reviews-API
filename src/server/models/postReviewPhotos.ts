import pool from '../../database/index.js';
import format from 'pg-format';

const postReviewPhotos = (photos, review_id) => {

  const photoRows = photos.map((url) => {
    return [review_id, url];
  });

  const queryString = format('INSERT INTO reviews_photos (review_id, url) VALUES %L', photoRows);

  return pool.query(queryString);
};

export default postReviewPhotos;