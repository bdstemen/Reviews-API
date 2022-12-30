import models from '../models/index.js';

interface reqDataObj {
  review_id: number;
};

const helpful = (req, res) => {

  const reqData: reqDataObj = {
    review_id: req.params.review_id
  };

  models.helpful(reqData)
    .then((response) => {
      if (!response.rowCount) {
        throw 'Product does not exist';
      }
      res.status(204).send();
    })
    .catch((err) => {
      res.status(404).send(err);
    })
};

export default helpful;