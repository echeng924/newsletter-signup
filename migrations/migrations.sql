CREATE DATABASE newsletter_signups;

\c newsletter_signups

CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  zipcode INTEGER NOT NULL,
);
