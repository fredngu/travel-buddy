DROP TABLE IF EXISTS comparison CASCADE;

CREATE TABLE comparison (
  comparison_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) REFERENCES user(user_id),
  trip1 VARCHAR(255) REFERENCES trip(trip_id),
  trip2 VARCHAR(255) REFERENCES trip(trip_id),
  trip3 VARCHAR(255) REFERENCES trip(trip_id),
  trip4 VARCHAR(255) REFERENCES trip(trip_id)
);