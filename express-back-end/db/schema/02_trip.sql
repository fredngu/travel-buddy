DROP TABLE IF EXISTS trip CASCADE;

CREATE TABLE trip (
  trip_id SERIAL PRIMARY KEY,
  trip_name VARCHAR(255) NOT NULL,
  traveller_id INT REFERENCES traveller(traveller_id),
  city_name VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  hotel_price VARCHAR(255),
  hotel_name VARCHAR(255) NOT NULL,
  flight_price INTEGER NOT NULL,
  city_image_url VARCHAR(2048) NOT NULL
);