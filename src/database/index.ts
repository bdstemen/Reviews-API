// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'benstemen',
//   host: 'localhost',
//   database: 'redPandaReviews',
//   password: '',
//   port: 5432
// });

// const query = (text, params) => {
//   const start = Date.now();
//   return pool.query(text, params)
//     .then((response) => {
//       const duration = Date.now() - start;
//       console.log('executed query', duration);
//       return response;
//     })
//     .catch((err) => {
//       const duration = Date.now() - start;
//       console.log('query failed', duration);
//       return err;
//     })
// }

// export default pool;


const { Pool } = require('pg');

const pool = new Pool({
  user: 'benstemen',
  host: 'localhost',
  database: 'redPandaReviews',
  password: '',
  port: 5432
});

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
//         console.log('query failed', duration);
//         return err;
//       })
//   }
// };

export default pool;