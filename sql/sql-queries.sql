CREATE TABLE IF NOT EXISTS "cafes" (
    cafe_id INT,
    name TEXT,
    address TEXT,
    opening_hours TEXT,
    PRIMARY KEY (cafe_id)
);
CREATE TABLE IF NOT EXISTS "ratings" (
    rating_id INT,
    cafe_id INT,
    taste TEXT,
    atmosphere TEXT,
    service TEXT,
    score INT,
    PRIMARY KEY (rating_id),
    FOREIGN KEY (cafe_id) REFERENCES cafes(cafe_id)
);
CREATE TABLE IF NOT EXISTS "price" (
    price_id INT,
    cafe_id INT,
    americano REAL,
    cake REAL,
    PRIMARY KEY (price_id),
    FOREIGN KEY (cafe_id) REFERENCES cafes(cafe_id)
);