CREATE TABLE IF NOT EXISTS locations (
    id SERIAL PRIMARY KEY,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    country VARCHAR(100) NOT NULL
);

INSERT INTO locations (city, state, country) VALUES
('Pebble Beach', 'California', 'USA'),
('Augusta', 'Georgia', 'USA'),
('St. Andrews', 'Fife', 'Scotland');

CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location_id INT REFERENCES locations(id) ON DELETE CASCADE,
    par INT NOT NULL,
    difficulty VARCHAR(50) NOT NULL,
    holes INT NOT NULL
);

INSERT INTO courses (name, location_id, par, difficulty, holes) VALUES
('Pebble Beach Golf Links', 1, 72, 'Hard', 18),
('Augusta National Golf Club', 2, 72, 'Very Hard', 18),
('St. Andrews Old Course', 3, 72, 'Medium', 18);
