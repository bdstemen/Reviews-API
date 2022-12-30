import pool from '../../database/index.js'

const meta = {
  ratings: (reqData) => {
    const query = `
      SELECT COUNT(*), rating
      FROM reviews
      WHERE product_id = $1
      GROUP BY rating
      ORDER BY rating DESC`;

    const data = [reqData.product_id];

    const queryName = 'get ratings data from reviews table';

    return pool.query(query, data, queryName);
  },

  recommended: (reqData) => {
    const query = `
      SELECT
        COUNT(*),
        recommend
      FROM reviews
      WHERE product_id = $1
      GROUP BY recommend`;

    const data = [reqData.product_id];

    const queryName = 'get recommended data from reviews table';

    return pool.query(query, data, queryName);
  },

  characteristics: (reqData) => {
    const query = `
      SELECT
        AVG(value),
        name,
        characteristics.id
      FROM characteristics_reviews
      INNER JOIN characteristics
      ON characteristics_reviews.characteristic_id = characteristics.id
      WHERE characteristics.id
      IN (
        SELECT id
        FROM characteristics
        WHERE product_id = $1)
      GROUP BY characteristics.id`;

    const data = [reqData.product_id];

    const queryName = 'get characteristics data from characteristics_reviews table';

    return pool.query(query, data, queryName);
  }
};

export default meta;