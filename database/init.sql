DROP TABLE IF EXISTS match_players;
DROP TABLE IF EXISTS matches;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    location_id INT NOT NULL,
    handicap DECIMAL(5,2) NOT NULL
);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    course_name VARCHAR(100) NOT NULL,
    match_date DATE NOT NULL
);

CREATE TABLE match_players (
    match_id INT REFERENCES matches(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY (match_id, user_id)
);

INSERT INTO users (first_name, last_name, city, state, country, location_id, handicap) VALUES
('John', 'Doe', 'Toronto', 'Ontario', 'Canada', 4, 10.5),
('Jane', 'Smith', 'Toronto', 'Ontario', 'Canada', 4, 12.3),
('Alice', 'Johnson', 'Vancouver', 'British Columbia', 'Canada', 1, 8.2),
('Bob', 'Brown', 'New York', 'New York', 'USA', 2, 15.6),
('Charlie', 'Williams', 'Los Angeles', 'California', 'USA', 3, 9.7);

INSERT INTO matches (city, state, country, course_name, match_date) VALUES
('Pebble Beach', 'California', 'USA', 'Pebble Beach Golf Links', '2024-06-15'),
('Toronto', 'Ontario', 'Canada', 'St. George’s Golf and Country Club', '2024-06-20'),
('Augusta', 'Georgia', 'USA', 'Augusta National Golf Club', '2024-07-05'),
('St. Andrews', 'Fife', 'Scotland', 'St. Andrews Old Course', '2024-07-10');

INSERT INTO match_players (match_id, user_id) VALUES
(1, 1), (1, 2),  -- John & Jane played in Pebble Beach
(2, 1), (2, 2),  -- Same two played in Toronto
(3, 3),          -- Alice played in Augusta
(4, 4), (4, 5);  -- Bob & Charlie played in St. Andrews
