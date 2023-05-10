CREATE DATABASE `movies`;

USE `movies`;

CREATE TABLE `directors` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    director_name VARCHAR(20) NOT NULL,
    notes TEXT
);

INSERT INTO `directors` (director_name)
VALUES
	('Gosho'),
    ('Pesho'),
    ('Tosho'),
    ('Gaco'),
    ('Baco');
    
CREATE TABLE `genres` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    genre_name VARCHAR(20) NOT NULL,
    notes TEXT
);

INSERT INTO `genres` (genre_name)
VALUES
	('Gosho'),
    ('Pesho'),
    ('Tosho'),
    ('Gaco'),
    ('Baco');
    
CREATE TABLE `categories` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(20) NOT NULL,
    notes TEXT
);

INSERT INTO `categories` (category_name)
VALUES
	('Gosho'),
    ('Pesho'),
    ('Tosho'),
    ('Gaco'),
    ('Baco');
    
CREATE TABLE `movies` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(20) NOT NULL,
    director_id INT,
    copyright_year VARCHAR(4),
    length DECIMAL,
    genre_id INT,
    category_id INT,
    rating DECIMAL,
    notes TEXT
);

INSERT INTO `movies` (title)
VALUES
	('Gosho'),
    ('Pesho'),
    ('Tosho'),
    ('Gaco'),
    ('Baco');