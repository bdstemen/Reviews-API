const schema = `
DROP TABLE IF EXISTS characteristics_reviews;
DROP TABLE IF EXISTS reviews_photos;
DROP TABLE IF EXISTS characteristics;
DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  product_id integer,
  rating integer,
  date varchar(60),
  summary varchar(1000),
  body varchar(1000),
  recommend boolean,
  reported boolean DEFAULT false,
  reviewer_name varchar(60),
  reviewer_email varchar(60),
  response varchar(1000),
  helpfulness integer DEFAULT 0
);

CREATE TABLE characteristics (
  id SERIAL PRIMARY KEY,
  product_id integer,
  name varchar(60)
);

CREATE TABLE characteristics_reviews (
  id SERIAL PRIMARY KEY,
  characteristic_id integer REFERENCES characteristics (id),
  review_id integer REFERENCES reviews (review_id),
  value integer
);

CREATE TABLE reviews_photos (
  id SERIAL PRIMARY KEY,
  review_id integer REFERENCES reviews (review_id),
  url varchar(1000)
);

CREATE INDEX PID_index ON reviews (product_id);
CREATE INDEX PID_reported_index ON reviews (product_id, reported);
CREATE INDEX RID_index ON reviews_photos (review_id);
CREATE INDEX characteristics_PID_index ON characteristics (product_id);
CREATE INDEX CID_index on characteristics_reviews (characteristic_id);`

export default schema;
