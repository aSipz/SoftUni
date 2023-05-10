CREATE DATABASE `exercise2`;

USE `exercise2`;

CREATE TABLE `people` (
	`id` INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	`name` VARCHAR(200) NOT NULL,
	`picture` BLOB,
	`height` DOUBLE(10, 2),
	`weight` DOUBLE(10, 2),
	`gender` VARCHAR(1) NOT NULL,
	`birthdate` DATE NOT NULL,
	`biography` TEXT
);

INSERT INTO `people` (`name`, `gender`, `birthdate`)
VALUES 
	('Gosho', 'm', DATE(NOW())),
    ('Ganka', 'f', DATE(NOW())),
    ('Penka', 'f', DATE(NOW())),
    ('Pesho', 'm', DATE(NOW())),
    ('Tosho', 'm', DATE(NOW()));
    
CREATE TABLE `users` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(26) NOT NULL,
    profile_picture BLOB,
    last_login_time TIME,
    is_deleted BOOLEAN
);

INSERT INTO `users` (`username`, `password`)
VALUES 
	('Gosho', 'efgsdfg'),
    ('Ganka', 'efgsdfg'),
    ('Penka', 'efgsdfg'),
    ('Pesho', 'efgsdfg'),
    ('Tosho', 'efgsdfg');
    
ALTER TABLE `users`
DROP PRIMARY KEY, ADD PRIMARY KEY (id, username);

ALTER TABLE `users`
MODIFY COLUMN last_login_time DATETIME DEFAULT NOW();

ALTER TABLE `users`
DROP PRIMARY KEY,
ADD CONSTRAINT pk_users
PRIMARY KEY (id),
ADD CONSTRAINT username_unique
UNIQUE (username);

