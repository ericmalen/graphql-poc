CREATE TABLE IF NOT EXISTS locations (
    id SERIAL PRIMARY KEY,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    country VARCHAR(100) NOT NULL
);

INSERT INTO locations (id, city, state, country) VALUES
(5, 'Pebble Beach', 'California', 'USA'),
(8, 'Augusta', 'Georgia', 'USA'),
(10, 'St. Andrews', 'Fife', 'Scotland');

CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location_id INT REFERENCES locations(id) ON DELETE CASCADE,
    par INT NOT NULL,
    difficulty VARCHAR(50) NOT NULL,
    holes INT NOT NULL
);

INSERT INTO courses (id, name, location_id, par, difficulty, holes) VALUES
(1, 'Pebble Beach Golf Links', 5, 72, 'Hard', 18),
(2, 'Augusta National Golf Club', 8, 72, 'Very Hard', 18),
(3, 'St. Andrews Old Course', 10, 72, 'Medium', 18);
