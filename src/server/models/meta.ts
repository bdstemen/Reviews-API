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

    return pool.query(query, data);
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

    return pool.query(query, data);
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

    return pool.query(query, data);
  }
};

export default meta;