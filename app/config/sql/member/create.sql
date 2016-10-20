INSERT INTO members (first_name, last_name, email, zipcode) VALUES ($1, $2, $3, $4) RETURNING *;
