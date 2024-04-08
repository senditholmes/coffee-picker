CREATE DATABASE coffee_picker_data;
USE coffee_picker_data;

CREATE TABLE cafes (
    cafe_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    address VARCHAR(30),
    address_link VARCHAR(200),
    opening_hour TIME,
    closing_hour TIME,
    PRIMARY KEY (cafe_id)
);
CREATE TABLE ratings (
    rating_id INT AUTO_INCREMENT,
    cafe_id INT NOT NULL,
    taste VARCHAR(30),
    atmosphere VARCHAR(30),
    service VARCHAR(30),
    americano_price MEDIUMINT(10),
    cake_price MEDIUMINT(10),
    overall_score TINYINT(4),
    visit_date DATE,
    FOREIGN KEY (cafe_id) REFERENCES cafes (cafe_id)
);