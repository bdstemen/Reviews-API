import models from '../models/index.js';

interface reqDataObj {
  page: number;
  count: number;
  sort: string;
  product_id: number;
};

const getReviews = (req, res) => {

  let reqData: reqDataObj = {
    page: req.query.page || 1,
    count: req.query.count || 5,
    sort: req.query.sort || 'relevant',
    product_id: req.query.product_id
  };

  models.getReviews.reviews(reqData)
    .then((data) => {
      let reviewsData = data.rows;

      if (!reviewsData.length) {
        throw 'Product does not exist';
      }

      return reviewsData.map((review) => {
        return models.getReviews.photos(review.review_id)
          .then((photos) => {
            // let formattedDate = new Date(parseInt(review.date)).toISOString();
            // if (review.response === 'null') review.response = false;
            return {
              // review_id: review.id,
              // rating: review.rating,
              // summary: review.summary,
              // recommend: review.recommend,
              // response: review.response,
              // body: review.body,
              // date: formattedDate,
              // reviewer_name: review.reviewer_name,
              // helpfulness: review.helpfulness,
              ...review,
              photos: photos.rows
            }
          })
      })
    })
    .then((reviewsDataPromises) => {
      return Promise.all(reviewsDataPromises)
    })
    .then((data) => {
      let response = {
        product: reqData.product_id,
        page: reqData.page,
        count: reqData.count,
        results: data
      };
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
};

export default getReviews;