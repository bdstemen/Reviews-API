import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  // Load test:
  stages: [
    { duration: '30s', target: 10000 }, // simulate ramp-up of traffic from 1 to 1000 users over 30s
    { duration: '60s', target: 10000 }, // stay at 1000 users for 30s
  ],

  // Stress test:
  // stages: [
  //   { duration: '20s', target: 1000 }, // simulate ramp-up of traffic from 1 to 1000 users over 30s
  //   { duration: '20s', target: 1000 }, // stay at 1000 users for 30s
  //   { duration: '20s', target: 3000 },
  //   { duration: '20s', target: 3000 },
  //   { duration: '20s', target: 7000 },
  //   { duration: '20s', target: 7000 },
  //   { duration: '20s', target: 10000 },
  //   { duration: '20s', target: 10000 },
  // ],

  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1000'],
    http_req_duration: ['p(99)<5000'],
  }
};

export default function () {
  let product_id = Math.floor((Math.random() * (1000011 - 12)) + 12);
  let res = http.get(`http://localhost:3000/reviews?product_id=${product_id}`);
  // if (res.status >= 400) console.log(`product ${product_id} does not exist`);
  sleep(1);
};
