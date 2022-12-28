import models from '../models/index.js';

const postReview = (req, res) => {

  models.postReview(req.body)
    .then((review_id) => {
      return Promise.all([
        models.postReviewPhotos(req.body.photos, review_id),
        models.postReviewCharacteristics(req.body.characteristics, review_id)
      ])
    })
    .then(() => {
      res.status(201).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    })
};

export default postReview;