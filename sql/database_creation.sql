CREATE DATABASE coffee_picker_app_data;
USE coffee_picker_app_data;

CREATE TABLE cafes (
    cafeId INT NOT NULL AUTO_INCREMENT,
    cafeName VARCHAR(30) UNIQUE,
    address VARCHAR(30),
    addressLink VARCHAR(200),
    openingHour TIME,
    closingHour TIME,
    PRIMARY KEY (cafeId)
);

CREATE TABLE users (
    userId INT AUTO_INCREMENT,
    userName VARCHAR(30),
    email VARCHAR(50),
    password VARCHAR(30),
    PRIMARY KEY (userId)
);

CREATE TABLE ratings (
    ratingId INT AUTO_INCREMENT,
    cafeId INT NOT NULL,
    userId INT NOT NULL,
    atmosphere VARCHAR(30),
    service VARCHAR(30),
    taste VARCHAR(30),
    americanoPrice MEDIUMINT(10),
    cakePrice MEDIUMINT(10),
    overallScore TINYINT(4),
    visitDate DATE,
    PRIMARY KEY (ratingId),
    FOREIGN KEY (cafeId) REFERENCES cafes (cafeId),
    FOREIGN KEY (userId) REFERENCES users (userId)
);
