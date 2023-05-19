CREATE DATABASE `softuni_imdb`;

USE `softuni_imdb`;

# 1
CREATE TABLE `genres` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE `countries` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL UNIQUE,
    continent VARCHAR(30) NOT NULL,
    currency VARCHAR(5)
);

CREATE TABLE `actors` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birthdate DATE NOT NULL,
    height INT,
    awards INT,
    country_id INT NOT NULL,
    CONSTRAINT fk_actors_countries FOREIGN KEY (`country_id`)
        REFERENCES `countries` (`id`)
);

CREATE TABLE `movies_additional_info` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rating DECIMAL(10 , 2 ) NOT NULL,
    runtime INT NOT NULL,
    picture_url VARCHAR(80) NOT NULL,
    budget DECIMAL(10 , 2 ),
    release_date DATE NOT NULL,
    has_subtitles TINYINT(1),
    description TEXT
);

CREATE TABLE `movies` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(70) NOT NULL UNIQUE,
    country_id INT NOT NULL,
    movie_info_id INT NOT NULL UNIQUE,
    CONSTRAINT fk_movies_countries FOREIGN KEY (`country_id`)
        REFERENCES `countries` (`id`),
    CONSTRAINT fk_movies_addition_ino FOREIGN KEY (`movie_info_id`)
        REFERENCES `movies_additional_info` (`id`)
);

CREATE TABLE `genres_movies` (
    genre_id INT,
    movie_id INT,
    CONSTRAINT fk_genres_movies_genres FOREIGN KEY (`genre_id`)
        REFERENCES `genres` (`id`),
    CONSTRAINT fk_genres_movies_movies FOREIGN KEY (`movie_id`)
        REFERENCES `movies` (`id`)
);

CREATE TABLE `movies_actors` (
    movie_id INT,
    actor_id INT,
    CONSTRAINT fk_movies_actors_movies FOREIGN KEY (`movie_id`)
        REFERENCES `movies` (`id`),
    CONSTRAINT fk_movies_actors_actors FOREIGN KEY (`actor_id`)
        REFERENCES `actors` (`id`)
);

# 2
INSERT INTO `actors` (`first_name`, `last_name`, `birthdate`, `height`, `awards`, `country_id`)
SELECT 
REVERSE(`first_name`), 
REVERSE(`last_name`), 
DATE_SUB(`birthdate`, INTERVAL 2 DAY), 
(`height` + 10), 
`country_id`, 
(SELECT `id` FROM `countries` WHERE `name` = 'Armenia') 
FROM `actors` 
WHERE `id` <= 10;

# 3
UPDATE `movies_additional_info` 
SET 
    `runtime` = `runtime` - 10
WHERE
    `id` BETWEEN 15 AND 25;
    
# 4
DELETE FROM `countries` 
WHERE
    `id` IN (SELECT 
        *
    FROM
        (SELECT 
            c.`id`
        FROM
            `countries` AS c
        LEFT JOIN `movies` AS m ON c.`id` = m.`country_id`
        
        WHERE
            m.`country_id` IS NULL) AS x);

# 5
SELECT 
    `id`, `name`, `continent`, `currency`
FROM
    `countries`
ORDER BY `currency` DESC , `id`;

# 6
SELECT 
    m.`id`, m.`title`, i.`runtime`, i.`budget`, i.`release_date`
FROM
    `movies_additional_info` AS i
        JOIN
    `movies` AS m ON m.`movie_info_id` = i.`id`
WHERE
    YEAR(i.`release_date`) BETWEEN 1996 AND 1999
ORDER BY i.`runtime` , m.`id`
LIMIT 20;

# 7
SELECT 
    CONCAT(a.`first_name`, ' ', a.`last_name`) AS 'full_name',
    CONCAT_WS('',REVERSE(a.`last_name`),
            CHAR_LENGTH(a.`last_name`),
            '@cast.com') AS 'email',
    TIMESTAMPDIFF(YEAR, a.`birthdate`, '2022-12-31') AS 'age',
    a.`height`
FROM
    `actors` AS a
        LEFT JOIN
    `movies_actors` AS ma ON ma.`actor_id` = a.`id`
WHERE
    ma.`movie_id` IS NULL
ORDER BY a.`height`;

# 8
SELECT 
    c.`name`, COUNT(m.`id`) AS 'movies_count'
FROM
    `countries` AS c
        JOIN
    `movies` AS m ON c.`id` = m.`country_id`
GROUP BY c.`id`
HAVING `movies_count` >= 7
ORDER BY c.`name` DESC;

# 9
SELECT 
    m.`title`,
    (CASE
        WHEN i.`rating` <= 4 THEN 'poor'
        WHEN i.`rating` <= 7 THEN 'good'
        ELSE 'excellent'
    END) AS 'rating',
    IF(i.`has_subtitles` = 1, 'english', '-') AS 'subtitles',
    i.`budget`
FROM
    `movies` AS m
        JOIN
    `movies_additional_info` AS i ON m.`movie_info_id` = i.`id`
ORDER BY i.`budget` DESC;

# 10
DELIMITER $$
CREATE FUNCTION udf_actor_history_movies_count(full_name VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
RETURN (SELECT COUNT(*) FROM `actors` AS a
JOIN `movies_actors` AS ma
ON ma.`actor_id`=a.`id`
JOIN `genres_movies` AS gm
On gm.`movie_id` = ma.`movie_id`
JOIN `genres` AS g
ON g.`id`=gm.`genre_id`
WHERE CONCAT(a.`first_name`, ' ', a.`last_name`) = full_name AND g.`name` = 'History');
END$$

# 11
DELIMITER $$
CREATE PROCEDURE udp_award_movie (movie_title VARCHAR(50))
BEGIN
UPDATE `actors` AS a1, 
(SELECT a.`id` FROM `actors` AS a
JOIN `movies_actors` AS ma ON ma.`actor_id`=a.`id`
JOIN `movies` AS m ON m.`id`=ma.`movie_id`
WHERE m.`title` = movie_title) AS s
SET a1.`awards` = a1.`awards` + 1
WHERE a1.`id` = s.`id`;
END$$