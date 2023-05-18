# 1
DELIMITER $$

CREATE FUNCTION ufn_count_employees_by_town (town_name VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
DECLARE selected_town_id INT;

SET `selected_town_id` := (SELECT `town_id` FROM `towns` WHERE `name` = town_name);

RETURN (SELECT COUNT(*) FROM `employees` AS `e` 
	WHERE `e`.`address_id` IN (
		SELECT `address_id` FROM `addresses` WHERE `town_id` = selected_town_id 
        )
	);

END$$

DELIMITER ;

SELECT ufn_count_employees_by_town('Berlin');

# 2
DELIMITER $$

CREATE PROCEDURE usp_raise_salaries(department_name VARCHAR(50))
BEGIN
UPDATE `employees`
SET `salary` = `salary` * 1.05
WHERE `department_id` = (
	SELECT `department_id` FROM `departments`
    WHERE `name` = department_name
);
END$$

DELIMITER ;

CALL usp_raise_salaries('Sales');

DROP PROCEDURE usp_raise_salaries;

# 3
DELIMITER $$

CREATE PROCEDURE usp_raise_salary_by_id(input_id INT)
BEGIN
	START TRANSACTION;
    IF ((SELECT COUNT(*) FROM `employees` WHERE `employee_id` = input_id) = 1)
    THEN
    UPDATE `employees`
    SET `salary` = `salary` * 1.05
    WHERE `employee_id` = input_id;
    ELSE
    ROLLBACK;
    END IF;
END$$

DELIMITER ;

CALL usp_raise_salary_by_id(3);
DROP PROCEDURE usp_raise_salary_by_id;

# 4
CREATE TABLE `deleted_employees` (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    middle_name VARCHAR(50),
    job_title VARCHAR(50),
    department_id INT,
    salary DECIMAL(19 , 4 )
);

DELIMITER $$

CREATE TRIGGER tr_deleted_employees
AFTER DELETE
on `employees`
FOR EACH ROW
BEGIN
INSERT INTO `deleted_employees` (
`first_name`,
`last_name`,
`middle_name`,
`job_title`,
`department_id`,
`salary`)
VALUES
(OLD.`first_name`, OLD.`last_name`, OLD.`middle_name`, OLD.`job_title`, OLD.`department_id`, OLD.`salary`);
END$$

DELIMITER ;

SET FOREIGN_KEY_CHECKS=0;
DELETE FROM `employees` 
WHERE
    `department_id` = 5;
SET FOREIGN_KEY_CHECKS=1;