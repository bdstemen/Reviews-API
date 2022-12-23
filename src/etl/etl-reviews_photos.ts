import pool from '../database/index.js';

let query = `COPY reviews_photos FROM '/Users/benstemen/HackReactor/Reviews-API/SDC-data/reviews_photos.csv' DELIMITER ',' CSV HEADER;`

pool.query(query)
  .then((res) => {
    console.log('query successful:', res);
  })
  .catch((err) => {
    console.log('error querying database:', err);
  })