-- CREATE TABLE "states_unemployment"(
-- state VARCHAR(50),
-- data TEXT	
-- )

-- SELECT *
-- FROM states_unemployment

-- CREATE TABLE "geojson"(
-- id INT Primary Key NOT NULL,
-- state VARCHAR(50),
-- density DECIMAL,
-- coordinates text
-- );


-- SELECT *
-- FROM geojson

-- SELECT geojson.state, geojson.density, geojson.coordinates, states_unemployment.data
-- FROM geojson
-- INNER JOIN states_unemployment on geojson.state = states_unemployment.state

