CREATE DATABASE `instd`;

USE `instd`;

CREATE TABLE `photos` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    date DATETIME NOT NULL,
    views INT NOT NULL DEFAULT 0
);

CREATE TABLE `comments` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    comment VARCHAR(255) NOT NULL,
    date DATETIME NOT NULL,
    photo_id INT NOT NULL,
    CONSTRAINT fk_comments_photos FOREIGN KEY (`photo_id`)
        REFERENCES `photos` (`id`)
);

CREATE TABLE `users` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    gender CHAR(1),
    age INT NOT NULL,
    job_title VARCHAR(40) NOT NULL,
    ip VARCHAR(30) NOT NULL
);

CREATE TABLE `addresses` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    address VARCHAR(30) NOT NULL,
    town VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_addresses_users FOREIGN KEY (`user_id`)
        REFERENCES `users` (`id`)
);

CREATE TABLE `likes` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    photo_id INT,
    user_id INT,
    CONSTRAINT fk_likes_photos FOREIGN KEY (`photo_id`)
        REFERENCES `photos` (`id`),
    CONSTRAINT fk_likes_users FOREIGN KEY (`user_id`)
        REFERENCES `users` (`id`)
);

CREATE TABLE `users_photos` (
    photo_id INT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_users_photos_photos FOREIGN KEY (`photo_id`)
        REFERENCES `photos` (`id`),
    CONSTRAINT fk_users_photos_users FOREIGN KEY (`user_id`)
        REFERENCES `users` (`id`)
);

#2
INSERT INTO `addresses` (`address`, `town`, `country`, `user_id`)
(SELECT `username`, `password`, `ip`, `age` FROM `users` WHERE `gender` = 'm');

#3
UPDATE `addresses` 
SET 
    `country` = (CASE
        WHEN LEFT(`country`, 1) = 'B' THEN 'Blocked'
        WHEN LEFT(`country`, 1) = 'T' THEN 'Test'
        WHEN LEFT(`country`, 1) = 'P' THEN 'In Progress'
    END)
WHERE
    LEFT(`country`, 1) IN ('B' , 'T', 'P');
    
#4
DELETE FROM `addresses` 
WHERE
    MOD(`id`, 3) = 0;
    
#5
SELECT 
    `username`, `gender`, `age`
FROM
    `users`
ORDER BY `age` DESC , `username`;

#6
SELECT 
    p.`id`,
    p.`date` AS 'date_and_time',
    p.`description`,
    COUNT(c.`id`) AS 'commentsCount'
FROM
    `photos` AS p
        JOIN
    `comments` AS c ON c.`photo_id` = p.`id`
GROUP BY p.`id`
ORDER BY `commentsCount` DESC , p.`id`
LIMIT 5;

#7
SELECT 
    CONCAT(u.`id`, ' ', u.`username`) AS 'id_username',
    u.`email`
FROM
    `users` AS u
        JOIN
    `users_photos` AS up ON u.`id` = up.`user_id`
WHERE
    u.`id` = up.`photo_id`
ORDER BY u.`id`;

#8
SELECT 
    p.`id`,
    IFNULL(s1.`likes_count`, 0),
    IFNULL(s2.`comments_count`, 0)
FROM
    `photos` AS p
        LEFT JOIN
    (SELECT 
        `photo_id`, COUNT(`id`) AS 'likes_count'
    FROM
        `likes`
    GROUP BY `photo_id`) AS s1 ON p.`id` = s1.`photo_id`
        LEFT JOIN
    (SELECT 
        `photo_id`, COUNT(`id`) AS 'comments_count'
    FROM
        `comments`
    GROUP BY `photo_id`) AS s2 ON p.`id` = s2.`photo_id`
ORDER BY s1.`likes_count` DESC , s2.`comments_count` DESC , p.`id`;

#9
SELECT 
    CONCAT(LEFT(`description`, 30), '...') AS 'summary', `date`
FROM
    `photos`
WHERE
    DAY(`date`) = 10
ORDER BY `date` DESC;

#10
DELIMITER $$
CREATE FUNCTION udf_users_photos_count(username VARCHAR(30)) 
RETURNS INT
DETERMINISTIC
BEGIN
RETURN
(SELECT COUNT(p.`id`) FROM `users` AS u
LEFT JOIN `users_photos` AS up ON up.`user_id` = u.`id`
LEFT JOIN `photos` AS p ON up.`photo_id` = p.`id`
WHERE u.`username` = username
GROUP BY u.`id`
);
END$$

#11
CREATE PROCEDURE udp_modify_user (address VARCHAR(30), town VARCHAR(30))
BEGIN
UPDATE `users`
SET `age` = `age` + 10
WHERE `id` IN (SELECT `user_id` FROM `addresses`
WHERE `town`=town AND `address` = address);
END$$