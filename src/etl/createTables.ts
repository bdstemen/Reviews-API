import pool from '../database/index.js';
import schema from '../database/schema.js';

pool.query(schema)
  .then((res) => {
    console.log('tables created successfully:', res);
  })
  .catch((err) => {
    console.log('error creating tables:', err);
  })
