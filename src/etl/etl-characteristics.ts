import pool from '../database/index.js';

let query = `COPY characteristics FROM '/Users/benstemen/HackReactor/Reviews-API/SDC-data/characteristics.csv' DELIMITER ',' CSV HEADER;`

pool.query(query)
  .then((res) => {
    console.log('query successful:', res);
  })
  .catch((err) => {
    console.log('error querying database:', err);
  })