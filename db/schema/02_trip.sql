DROP TABLE IF EXISTS trip CASCADE;

CREATE TABLE trip (
  trip_id SERIAL PRIMARY KEY,
  trip_name VARCHAR(255) NOT NULL,
  traveller_id VARCHAR(255) REFERENCES usetraveller(traveller_id),
  city_name VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  hotel_lowest INTEGER NOT NULL,
  hotel_highest INTEGER NOT NULL,
  flight_lowest INTEGER NOT NULL,
  flight_highest INTEGER NOT NULL,
  city_image_url VARCHAR(255) NOT NULL
);