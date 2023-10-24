DROP TABLE IF EXISTS comparison CASCADE;

CREATE TABLE comparison (
  comparison_id SERIAL PRIMARY KEY,
  comparison_name VARCHAR(255) NOT NULL,
  traveller_id INT REFERENCES traveller(traveller_id),
  trip1 INT REFERENCES trip(trip_id),
  trip2 INT REFERENCES trip(trip_id),
  trip3 INT REFERENCES trip(trip_id),
  trip4 INT REFERENCES trip(trip_id)
);