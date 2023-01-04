import models from '../models/index.js';

interface reqDataObj {
  product_id: number;
};

const meta = (req, res) => {
  let reqData: reqDataObj = {
    product_id: req.query.product_id
  };

  return Promise.all([
    models.meta.ratings(reqData),
    models.meta.recommended(reqData),
    models.meta.characteristics(reqData)
  ])
    .then((data) => {
      let ratingsData = data[0].rows;
      let recommendedData = data[1].rows;
      let characteristicsData = data[2].rows;

      // if (!ratingsData.length || !recommendedData.length || !characteristicsData.length) {
      //   throw 'Product does not exist';
      // }

      let ratings = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0};
      let recommended = {"true": 0, "false": 0};
      let characteristics = {};

      ratingsData.forEach(rating => {
        ratings[rating.rating] = parseInt(rating.count);
      })

      recommendedData.forEach(recommendation => {
        recommended[recommendation.recommend.toString()] = parseInt(recommendation.count);
      })

      characteristicsData.forEach((characteristic) => {
        characteristics[characteristic.name] = {
          id: characteristic.id,
          value: ((Math.round(parseFloat(characteristic.avg) * 1e4)) / 1e4)
        };
      })

      let response = {
        product_id: reqData.product_id,
        ratings: ratings,
        recommended: recommended,
        characteristics: characteristics
      };

      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
};

export default meta;