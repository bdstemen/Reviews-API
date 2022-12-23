const { Pool } = require('pg');

const pool = new Pool({
  user: 'benstemen',
  host: 'localhost',
  database: 'redPandaReviews',
  password: '',
  port: 5432
});

export default pool;