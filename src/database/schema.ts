const schema = `
DROP TABLE IF EXISTS characteristics_reviews;
DROP TABLE IF EXISTS reviews_photos;
DROP TABLE IF EXISTS characteristics;
DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id integer PRIMARY KEY,
  product_id integer,
  rating integer,
  date varchar(60),
  summary varchar(1000),
  body varchar(1000),
  recommend boolean,
  reported boolean,
  reviewer_name varchar(60),
  reviewer_email varchar(60),
  response varchar(1000),
  helpfulness integer
);

CREATE TABLE characteristics (
  id integer PRIMARY KEY,
  product_id integer,
  name varchar(60)
);

CREATE TABLE characteristics_reviews (
  id integer PRIMARY KEY,
  characteristic_id integer REFERENCES characteristics (id),
  review_id integer REFERENCES reviews (id),
  value integer
);

CREATE TABLE reviews_photos (
  id integer PRIMARY KEY,
  review_id integer REFERENCES reviews (id),
  url varchar(1000)
);`

export default schema;
