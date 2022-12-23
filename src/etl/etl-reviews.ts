// import * as fs from 'fs';
// import { parse } from 'fast-csv';
import pool from '../database/index.js';

let query = `COPY reviews FROM '/Users/benstemen/HackReactor/Reviews-API/SDC-data/reviews.csv' DELIMITER ',' CSV HEADER;`

pool.query(query)
  .then((res) => {
    console.log('query successful:', res);
  })
  .catch((err) => {
    console.log('error querying database:', err);
  })

// type reviewRow = {
//   id: number;
//   product_id: number;
//   rating: number;
//   date: any;
//   summary: string;
//   body: string;
//   recommend: boolean;
//   reported: boolean;
//   reviewer_name: string;
//   reviewer_email: string;
//   response: string;
//   helpfulness: number;
// };


// fs.createReadStream('/Users/benstemen/HackReactor/Reviews-API/SDC-data/reviews-test.csv')
//   .pipe(parse({ headers: true }))
//   // .transform(
//   //   (data: reviewRow): reviewRow => {
//   //     let formattedDate = new Date(parseInt(data.date)).toISOString();
//   //     data.date = formattedDate;
//   //     // return data;
//   //     // return {
//   //     //   id: Number(data.id),
//   //     //   product_id: Number(data.product_id),
//   //     //   rating: Number(data.rating),
//   //     //   date: formattedDate,
//   //     //   summary: data.summary,
//   //     //   body: data.body,
//   //     //   recommend: data.recommend,
//   //     //   reported: data.reported,
//   //     //   reviewer_name: data.reviewer_name,
//   //     //   reviewer_email: data.reviewer_email,
//   //     //   response: data.response,
//   //     //   helpfulness: Number(data.helpfulness)
//   //     // }
//   //     console.log(data)
//   //     return undefined;
//   //   }
//   // )
//   .on('error', error => console.error(error))
//   .on('data', (row: reviewRow) => {
//     console.log(row);
//     pool.query(`
//       INSERT INTO reviews (id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
//       VALUES(${row.id}, ${row.product_id}, ${row.rating}, '${new Date(parseInt(row.date)).toISOString()}', '${row.summary}', '${row.body}', ${row.recommend}, ${row.reported}, '${row.reviewer_name}', '${row.reviewer_email}', ${row.response}, ${row.helpfulness});
//     `)
//   })
//   .on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));