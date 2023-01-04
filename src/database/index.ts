const { Pool } = require('pg');

// use this for etl:
// const pool = new Pool({
//   user: 'postgres',
//   database: 'redPandaReviews',
//   password: 'postgres',
//   port: 5432
// });



const connection = new Pool({
  user: 'postgres',
  // host: 'db',
  host: 'localhost',
  database: 'redPandaReviews',
  password: 'postgres',
  port: 5432
});

const pool = {

  query: (text: string, params?: any[], name?: string) => {
    const start = Date.now();
    return connection.query(text, params)
      .then((response) => {
        const duration = Date.now() - start;
        console.log(`executed query (${name}) in ${duration}ms`);
        return response;
      })
      .catch((err) => {
        const duration = Date.now() - start;
        console.log(`query ${name} failed`);
        return err;
      })
  }
};

export default pool;