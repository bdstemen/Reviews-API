import models from '../models/index.js';

interface reqDataObj {
  review_id: number;
};

const report = (req, res) => {

  const reqData: reqDataObj = {
    review_id: req.params.review_id
  };

  models.report(reqData)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(404).send(err);
    })
};

export default report;