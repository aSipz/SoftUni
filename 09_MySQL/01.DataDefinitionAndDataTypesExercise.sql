CREATE DATABASE `minions`;

USE `minions`;

CREATE TABLE `minions` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `age` INT
);

CREATE TABLE `towns` (
    town_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255)
);

ALTER TABLE `towns`
RENAME COLUMN town_id TO id;

ALTER TABLE `minions`
ADD COlUMN town_id INT,
ADD FOREIGN KEY (`town_id`) REFERENCES `towns`(`id`);

INSERT INTO `towns` (name)
VALUES ('Sofia'), ('Plovdiv'), ('Varna');

INSERT INTO `minions` (name, age, town_id)
VALUES ('Kevin', 22, 1), ('Bob', 15, 3), ('Steward', NULL, 2);