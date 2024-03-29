CREATE DATABASE `minions`;

USE `minions`;

CREATE TABLE `minions` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    age INT
);

CREATE TABLE `towns` (
    town_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);

ALTER TABLE `towns`
RENAME COLUMN town_id TO id;

ALTER TABLE `minions`
ADD COlUMN town_id INT,
ADD CONSTRAINT fk_minions_towns
FOREIGN KEY (`town_id`) REFERENCES `towns`(`id`);

INSERT INTO `towns` (id, name)
VALUES (1,'Sofia'), (2,'Plovdiv'), (3,'Varna');

INSERT INTO `minions` (id,name, age, town_id)
VALUES (1,'Kevin', 22, 1), (2,'Bob', 15, 3), (3,'Steward', NULL, 2);

TRUNCATE TABLE `minions`;

DROP TABLE `minions`, `towns`;