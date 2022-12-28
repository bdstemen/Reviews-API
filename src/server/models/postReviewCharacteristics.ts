import pool from '../../database/index.js'
import format from 'pg-format';

const postReviewCharacteristics = (characteristics, review_id) => {

  const characteristicRows = Object.keys(characteristics).map((key) => {
    return [key, review_id, characteristics[key]];
  });

  const queryString = format('INSERT INTO characteristics_reviews (characteristic_id, review_id, value) VALUES %L', characteristicRows);

  return pool.query(queryString);
};

export default postReviewCharacteristics;