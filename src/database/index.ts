const { Pool } = require('pg');
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  // host: 'localhost',
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// const connectToDB = async () => {
//   try {
//     await pool.connect();
//   } catch (err) {
//     console.log(err);
//   }
// }

// connectToDB();

// const connection = new Pool({
//   user: 'postgres',
//   host: 'db',
//   // host: 'localhost',
//   database: 'redPandaReviews',
//   password: 'postgres',
//   port: 5432
// });

// const pool = {

//   query: (text: string, params?: any[], name?: string) => {
//     const start = Date.now();
//     return connection.query(text, params)
//       .then((response) => {
//         const duration = Date.now() - start;
//         console.log(`executed query (${name}) in ${duration}ms`);
//         return response;
//       })
//       .catch((err) => {
//         const duration = Date.now() - start;
//         console.log(`query ${name} failed`);
//         return err;
//       })
//   }
// };

export default pool;