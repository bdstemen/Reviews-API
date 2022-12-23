import models from '../models/index.js';

interface reqDataObj {
  product_id: number;
};

const meta = (req, res) => {
  let reqData: reqDataObj = {
    product_id: req.query.product_id
  };

  models.meta(reqData)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
};

export default meta;