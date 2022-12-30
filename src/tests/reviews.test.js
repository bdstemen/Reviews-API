// import supertest from 'supertest';
const supertest = require('supertest');
const baseURL = 'http://localhost:3000';

describe('routes' , () => {
  describe('GET /reviews', () => {
    it('should return 404 if the product does not exist', async () => {
      const response = await supertest(baseURL).get('/reviews').query({product_id: 0});
      expect(response.statusCode).toBe(404);
    });

    it('should return 200 if the product exists', async () => {
      const response = await supertest(baseURL).get('/reviews').query({product_id: 1});
      expect(response.statusCode).toBe(200);
    });

    it('should return data if the product exists', async () => {
      const response = await supertest(baseURL).get('/reviews').query({product_id: 1});
      expect(response.body.results.length >= 1).toBe(true);
    });
  })

  describe('PUT /reviews/:review_id/helpful', () => {
    it('should return 204 if the product exists', async () => {
      const response = await supertest(baseURL).put('/reviews/1/helpful');
      expect(response.statusCode).toBe(204);
    })

    it('should return 404 if the product does not exist', async () => {
      const response = await supertest(baseURL).put('/reviews/0/helpful');
      expect(response.statusCode).toBe(404);
    })
  })

  describe('PUT /reviews/:review_id/helpful', () => {
    it('should return 204 if the product exists', async () => {
      const response = await supertest(baseURL).put('/reviews/1/report');
      expect(response.statusCode).toBe(204);
    })

    it('should return 404 if the product does not exist', async () => {
      const response = await supertest(baseURL).put('/reviews/0/report');
      expect(response.statusCode).toBe(404);
    })
  })

  describe('POST /reviews', () => {
    it('should return 201', async () => {
      const response = await supertest(baseURL).post('/reviews').send({
        product_id: 1,
        rating: 5,
        summary: 'test summary',
        body: 'test body',
        recommend: true,
        name: 'test',
        email: 'test@test.com',
        photos: ['testPhotoURL1, testPhotoURL2'],
        characteristics: {'1': 5, '2': 4}
      });
      expect(response.statusCode).toBe(201);
    })

    // it('should add the review to the database', async () => {
    //   const response = await supertest(baseURL).get('/reviews').query({
    //     product_id: 1,
    //     page: 1,
    //     count: 1,
    //     sort: 'newest'
    //   });
    //   expect(response.body.results[0].summary).toBe('test summary');
    // })
  })

  describe('GET /reviews/meta', () => {
    it('should return 200 if the product exists', async () => {
      const response = await supertest(baseURL).get('/reviews/meta').query({
        product_id: 1
      });
      expect(response.statusCode).toBe(200);
    })

    it('should return 404 if the product does not exist', async () => {
      const response = await supertest(baseURL).get('/reviews/meta').query({
        product_id: 0
      });
      expect(response.statusCode).toBe(404);
    })
  })
})