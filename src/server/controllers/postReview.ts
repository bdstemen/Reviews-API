import models from '../models/index.js';

interface charObj {
  [key: string]: number;
}

interface reqDataObj {
  product_id: number;
  rating: number;
  summary: string;
  body: string;
  recommend: boolean;
  reviewer_name: string;
  reviewer_email: string;
  photos: string[];
  characteristics: charObj;
};

const postReview = (req, res) => {

  const reqData: reqDataObj = {
    product_id: req.body.product_id,
    rating: req.body.rating,
    summary: req.body.summary,
    body: req.body.body,
    recommend: req.body.recommend,
    reviewer_name: req.body.name,
    reviewer_email: req.body.email,
    photos: req.body.photos,
    characteristics: req.body.characteristics
  };

  models.postReview(reqData)
    .then(() => {
      res.status(201).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    })
};

export default postReview;