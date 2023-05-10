CREATE DATABASE `car_rental`;

USE `car_rental`;

CREATE TABLE `categories` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(20) NOT NULL,
    daily_rate INT,
    weekly_rate INT,
    monthly_rate INT,
    weekend_rate INT
);

INSERT INTO `categories` (category)
VALUES 
	('test1'),
    ('test2'),
    ('test3');
    
CREATE TABLE `cars` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    plate_number VARCHAR(20) NOT NULL,
    make VARCHAR(20),
    model VARCHAR(20),
    car_year VARCHAR(4),
    category_id INT,
    doors INT,
    picture BLOB,
    car_condition TEXT,
    available BOOLEAN
);

INSERT INTO `cars` (plate_number)
VALUES 
	('test1'),
    ('test2'),
    ('test3');
    
CREATE TABLE `employees` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20),
    title VARCHAR(20),
    notes TEXT
);

INSERT INTO `employees` (first_name)
VALUES 
	('test1'),
    ('test2'),
    ('test3');
    
CREATE TABLE `customers` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    driver_licence_number INT NOT NULL,
    full_name VARCHAR(20) NOT NULL,
    address VARCHAR(50),
    city VARCHAR(50),
    zip_code INT,
    notes TEXT
);

INSERT INTO `customers` (driver_licence_number, full_name)
VALUES 
	(1234, 'test1'),
    (1234,'test2'),
    (1234,'test3');
    
CREATE TABLE `rental_orders` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    customer_id INT,
    car_id INT,
    car_condition VARCHAR(20),
    tank_level INT,
    kilometrage_start INT,
    kilometrage_end INT,
    total_kilometrage INT,
    start_date DATE,
    end_date DATE,
    total_days INT,
    rate_applied INT,
    tax_rate INT,
    order_status VARCHAR(20),
    notes TEXT NOT NULL
    );

INSERT INTO `rental_orders` (notes)
VALUES 
	('test1'),
    ('test2'),
    ('test3');