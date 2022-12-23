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

  models.getReviews(reqData)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
};

export default getReviews;