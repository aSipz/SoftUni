CREATE DATABASE `fsd`;

USE `fsd`;

CREATE TABLE `countries` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL
);

CREATE TABLE `towns` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    country_id INT NOT NULL,
    CONSTRAINT fk_towns_countries FOREIGN KEY (`country_id`)
        REFERENCES `countries` (`id`)
);

CREATE TABLE `stadiums` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    capacity INT NOT NULL,
    town_id INT NOT NULL,
    CONSTRAINT fk_stadiums_towns FOREIGN KEY (`town_id`)
        REFERENCES `towns` (`id`)
);

CREATE TABLE `teams` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    established DATE NOT NULL,
    fan_base BIGINT(20) NOT NULL DEFAULT 0,
    stadium_id INT NOT NULL,
    CONSTRAINT fk_teams_stadiums FOREIGN KEY (`stadium_id`)
        REFERENCES `stadiums` (`id`)
);

CREATE TABLE `skills_data` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    dribbling INT DEFAULT 0,
    pace INT DEFAULT 0,
    passing INT DEFAULT 0,
    shooting INT DEFAULT 0,
    speed INT DEFAULT 0,
    strength INT DEFAULT 0
);

CREATE TABLE `players` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(10) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    age INT NOT NULL DEFAULT 0,
    position CHAR(1),
    salary DECIMAL(10 , 2 ) NOT NULL DEFAULT 0,
    hire_date DATETIME,
    skills_data_id INT NOT NULL,
    team_id INT,
    CONSTRAINT fk_players_skills_data FOREIGN KEY (`skills_data_id`)
        REFERENCES `skills_data` (`id`),
    CONSTRAINT fk_players_teams FOREIGN KEY (`team_id`)
        REFERENCES `teams` (`id`)
);

CREATE TABLE `coaches` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(10) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    salary DECIMAL(10 , 2 ) NOT NULL DEFAULT 0,
    coach_level INT NOT NULL DEFAULT 0
);

CREATE TABLE `players_coaches` (
    player_id INT,
    coach_id INT,
    CONSTRAINT pk_players_coaches PRIMARY KEY (`player_id` , `coach_id`),
    CONSTRAINT fk_players_coaches_players FOREIGN KEY (`player_id`)
        REFERENCES `players` (`id`),
    CONSTRAINT fk_players_coaches_coaches FOREIGN KEY (`coach_id`)
        REFERENCES `coaches` (`id`)
);

# 2
INSERT INTO `coaches` (`first_name`, `last_name`, `salary`, `coach_level`)
SELECT `first_name`, `last_name`, `salary`, CHAR_LENGTH(`first_name`) 
FROM `players` 
WHERE `age` >= 45;

# 3
UPDATE `coaches` AS c1,
    (SELECT 
        COUNT(p.`id`) AS 'count', c.`id`
    FROM
        `coaches` AS c
    JOIN `players_coaches` AS pc ON pc.`coach_id` = c.`id`
    JOIN `players` AS p ON pc.`player_id` = p.`id`
    GROUP BY c.`id`) AS s 
SET 
    c1.`coach_level` = c1.`coach_level` + 1
WHERE
    c1.`first_name` LIKE 'A%'
    AND c1.`id` = s.`id`
        AND s.count >= 1; 
        
# 4
DELETE FROM `players` 
WHERE
    `age` >= 45;
    
# 5
SELECT 
    `first_name`, `age`, `salary`
FROM
    `players`
ORDER BY `salary` DESC;

# 6
SELECT 
    p.`id`,
    CONCAT(p.`first_name`, ' ', p.`last_name`) AS 'full_name',
    p.`age`,
    p.`position`,
    p.`hire_date`
FROM
    `players` AS p
WHERE
    p.`age` < 23 AND p.`position` = 'A'
        AND p.`hire_date` IS NULL
        AND (SELECT 
            s.`strength`
        FROM
            `skills_data` AS s
        WHERE
            p.`skills_data_id` = s.`id`) > 50
ORDER BY p.`salary` , p.`age`;

# 7
SELECT 
    t1.`name` AS 'team_name',
    t1.`established`,
    t1.`fan_base`,
    (SELECT 
            IF(COUNT(p.`id`) IS NOT NULL,
                    COUNT(p.`id`),
                    0)
        FROM
            `teams` AS t
                LEFT JOIN
            `players` AS p ON t.`id` = p.`team_id`
        WHERE
            t.`id` = t1.`id`
        GROUP BY t.`id`) AS 'players_count'
FROM
    `teams` AS t1
ORDER BY `players_count` DESC , t1.`fan_base` DESC;

# 8
SELECT 
    MAX(sk.`speed`) AS 'max_speed', t.`name` AS 'town_name'
FROM
    `towns` AS t
        LEFT JOIN
    `stadiums` AS s ON t.`id` = s.`town_id`
        LEFT JOIN
    `teams` AS te ON te.`stadium_id` = s.`id`
        LEFT JOIN
    `players` AS p ON p.`team_id` = te.`id`
        LEFT JOIN
    `skills_data` AS sk ON sk.`id` = p.`skills_data_id`
WHERE
    te.`name` != 'Devify'
GROUP BY t.`id`
ORDER BY `max_speed` DESC , t.`name`;

# 9
SELECT 
    c.`name`,
    COUNT(p.`id`) AS 'total_count_of_players',
    SUM(p.`salary`) AS 'total_sum_of_salaries'
FROM
    `countries` AS c
        LEFT JOIN
    `towns` AS t ON t.`country_id` = c.`id`
        LEFT JOIN
    `stadiums` AS s ON t.`id` = s.`town_id`
        LEFT JOIN
    `teams` AS te ON te.`stadium_id` = s.`id`
        LEFT JOIN
    `players` AS p ON p.`team_id` = te.`id`
GROUP BY c.`id`
ORDER BY `total_count_of_players` DESC , c.`name`;

# 10
DELIMITER $$
CREATE FUNCTION udf_stadium_players_count(st_name VARCHAR(30))
RETURNS INT
DETERMINISTIC
BEGIN
RETURN (SELECT 
    COUNT(p.`id`)
FROM
    `stadiums` AS s 
        LEFT JOIN
    `teams` AS t ON t.`stadium_id` = s.`id`
        LEFT JOIN
    `players` AS p ON p.`team_id` = t.`id`
    WHERE s.`name` = st_name);
END$$
DELIMITER ;

# 11
DELIMITER $$
CREATE FUNCTION udf_avg_player_speed_by_team(team_name VARCHAR(45))
RETURNS INT
DETERMINISTIC
BEGIN
RETURN (
SELECT AVG(s.`speed`) FROM `players` AS p
JOIN `skills_data` as s
ON s.`id` = p.`skills_data_id`
JOIN `teams` AS t
ON t.`id` = p.`team_id`
WHERE t.`name` = team_name
GROUP BY t.`id`
);
END$$

DELIMITER $$
CREATE PROCEDURE udp_find_playmaker(min_dribble_points INT, team_name VARCHAR(45))
BEGIN
SELECT CONCAT(p.`first_name`, ' ', p.`last_name`) AS 'full_name',
p.`age`, p.`salary`, s.`dribbling`, s.`speed`, t.`name` AS 'team_name'
 FROM `players` AS p
JOIN `skills_data` AS s
ON p.`skills_data_id` = s.`id`
JOIN `teams` AS t
ON t.`id` = p.`team_id`
WHERE s.`dribbling` > min_dribble_points AND t.`name` = team_name AND s.`speed` > udf_avg_player_speed_by_team(team_name)
ORDER BY s.`speed` DESC
LIMIT 1;
END$$
DELIMITER ;