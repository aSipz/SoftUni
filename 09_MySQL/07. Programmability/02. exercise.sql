# 1
DELIMITER $$
CREATE PROCEDURE usp_get_employees_salary_above_35000()
BEGIN
	SELECT `first_name`, `last_name`
    FROM `employees` 
    WHERE `salary` > 35000
    ORDER BY `first_name`, `last_name`, `employee_id`;
END$$
DELIMITER ;
CALL usp_get_employees_salary_above_35000();

# 2
DELIMITER $$
CREATE PROCEDURE usp_get_employees_salary_above(sal DECIMAL(30,4))
BEGIN
	SELECT `first_name`, `last_name`
    FROM `employees` 
    WHERE `salary` >= sal
    ORDER BY `first_name`, `last_name`, `employee_id`;
END$$
DELIMITER ;
CALL usp_get_employees_salary_above(45000);

# 3
DELIMITER $$
CREATE PROCEDURE usp_get_towns_starting_with(str VARCHAR(20))
BEGIN
	SELECT `name` AS 'town_name'
	FROM `towns`
    WHERE `name` LIKE CONCAT(str, '%')
    ORDER BY `name`;
END$$
DELIMITER ;
CALL usp_get_towns_starting_with('b');

# 4
DELIMITER $$
CREATE PROCEDURE usp_get_employees_from_town(t_name VARCHAR(50))
BEGIN
	SELECT e.`first_name`, e.`last_name`
    FROM `employees` AS e
    JOIN `addresses` AS a
    ON a.`address_id` = e.`address_id`
    JOIN `towns` AS t
    ON t.`town_id` = a.`town_id`
    WHERE t.`name` = t_name
    ORDER BY e.`first_name`, e.`last_name`, e.`employee_id`;
END$$
DELIMITER ;
CALL usp_get_employees_from_town('Sofia');

# 5
DELIMITER $$
CREATE FUNCTION ufn_get_salary_level(sal DECIMAL(19,4))
RETURNS VARCHAR(10)
DETERMINISTIC
BEGIN
DECLARE salary_level VARCHAR(10);
SET salary_level = CASE
	WHEN sal < 30000 THEN 'Low'
    WHEN sal BETWEEN 30000 AND 50000 THEN 'Average'
    WHEN sal > 50000 THEN 'High'
END;
RETURN salary_level;
END$$
DELIMITER ;
SELECT ufn_get_salary_level(13500);

# 6
DELIMITER $$
CREATE PROCEDURE usp_get_employees_by_salary_level(sal_level VARCHAR(10))
BEGIN
	SELECT `first_name`, `last_name`
    FROM `employees`
    WHERE (SELECT ufn_get_salary_level(`salary`)) = sal_level
    ORDER BY `first_name` DESC, `last_name` DESC;
END$$
DELIMITER ;
CALL usp_get_employees_by_salary_level('High');

# 7
DELIMITER $$
CREATE FUNCTION ufn_is_word_comprised(letters VARCHAR(50), word VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
RETURN word REGEXP CONCAT('^[', letters, ']+$');
END$$
DELIMITER ;
SELECT ufn_is_word_comprised('oistmiahf', 'halves');

# 8
DELIMITER $$
CREATE PROCEDURE usp_get_holders_full_name()
BEGIN
SELECT CONCAT_WS(' ', `first_name`, `last_name`) AS 'full_name'
FROM `account_holders`
ORDER BY `full_name`, `id`;
END$$
DELIMITER ;
CALL usp_get_holders_full_name();

# 9
DELIMITER $$
CREATE PROCEDURE usp_get_holders_with_balance_higher_than(num DECIMAL(19,4))
BEGIN
SELECT h.`first_name`, h.`last_name`
FROM `account_holders` AS h
JOIN `accounts` AS a
ON h.`id` = a.`account_holder_id`
GROUP BY a.`account_holder_id`
HAVING (SUM(a.`balance`)) > num
ORDER BY a.`account_holder_id`;
END$$
DELIMITER ;
CALL usp_get_holders_with_balance_higher_than(7000);

# 10
DELIMITER $$
CREATE FUNCTION ufn_calculate_future_value(sum DECIMAL(20,4), rate DOUBLE, years INT)
RETURNS DECIMAL(20,4)
DETERMINISTIC
BEGIN
RETURN sum*(POWER((1 + rate), years));
END$$
DELIMITER ;
SELECT ufn_calculate_future_value(1000, 0.5, 5);

# 11
DELIMITER $$
CREATE FUNCTION ufn_calculate_future_value(sum DECIMAL(20,4), rate DOUBLE)
RETURNS DECIMAL(20,4)
DETERMINISTIC
BEGIN
RETURN sum*(POWER((1 + rate), 5));
END$$

CREATE PROCEDURE usp_calculate_future_value_for_account(acc_id INT, rate DOUBLE(5,4))
BEGIN
SELECT 
	a.`id` AS 'account_id',
    h.`first_name`,
    h.`last_name`,
    a.`balance` AS 'current_balance',
    (SELECT ufn_calculate_future_value(a.`balance`, rate)) AS 'balance_in_5_years'
FROM `accounts` AS a
JOIN `account_holders` AS h
ON h.`id` = a.`account_holder_id`
WHERE a.`id` = acc_id;
END$$
DELIMITER ;
CALL usp_calculate_future_value_for_account(1, 0.1);

# 12
DELIMITER $$
CREATE PROCEDURE usp_deposit_money(acc_id INT, amount DECIMAL(20,4))
BEGIN
	START TRANSACTION;
    IF (amount <= 0) 
    THEN ROLLBACK;
    ELSE
    UPDATE `accounts`
    SET `balance` = `balance` + amount
    WHERE `id` = acc_id;
    COMMIT;
    END IF;
END$$
DELIMITER ;
CALL usp_deposit_money(1, 10);

# 13
DELIMITER $$
CREATE PROCEDURE usp_withdraw_money(acc_id INT, amount DECIMAL(20,4))
BEGIN
	START TRANSACTION;
    IF (amount <= 0) 
    THEN ROLLBACK;
    ELSE
    UPDATE `accounts`
    SET `balance` = `balance` - amount
    WHERE `id` = acc_id;
    END IF;
    IF ((SELECT `balance` FROM `accounts` WHERE `id` = acc_id) < 0)
    THEN ROLLBACK;
    END IF;
END$$
DELIMITER ;
CALL usp_withdraw_money(2, 4354.2300);

# 14
DELIMITER $$
CREATE PROCEDURE usp_transfer_money(from_acc_id INT, to_acc_id INT, amount DECIMAL(20,4))
BEGIN
	START TRANSACTION;
    IF (from_acc_id = to_acc_id
		OR (SELECT COUNT(`id`) FROM `accounts` WHERE `id` = from_acc_id) <> 1
        OR (SELECT COUNT(`id`) FROM `accounts` WHERE `id` = to_acc_id) <> 1
        OR amount <= 0
        OR (SELECT `balance` FROM `accounts` WHERE `id` = from_acc_id) < amount)
	THEN ROLLBACK;
    ELSE 
		UPDATE `accounts`
		SET `balance` = `balance` - amount
		WHERE `id` = from_acc_id;
        UPDATE `accounts`
		SET `balance` = `balance` + amount
		WHERE `id` = to_acc_id;
	END IF;
END$$
DELIMITER ;
CALL usp_transfer_money(9, 10, 10);

# 15
CREATE TABLE `logs` (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT,
    old_sum DECIMAL(20 , 4 ),
    new_sum DECIMAL(20 , 4 )
);

DELIMITER $$
CREATE TRIGGER `tr_balance_change`
AFTER UPDATE
ON `accounts`
FOR EACH ROW
BEGIN
	INSERT INTO `logs` (
    `account_id`,
    `old_sum`,
    `new_sum`)
    VALUES
    (OLD.`id`, OLD.`balance`, NEW.`balance`);
END$$
DELIMITER ;

CALL usp_withdraw_money(10, 20);

# 16
CREATE TABLE `notification_emails` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recipient INT,
    subject VARCHAR(255),
    body TEXT
);

DELIMITER $$
CREATE TRIGGER `tr_email_notification`
AFTER INSERT
ON `logs`
FOR EACH ROW
BEGIN
	INSERT INTO `notification_emails`
    (`recipient`, `subject`, `body`)
    VALUES
    (NEW.`account_id`,
    CONCAT('Balance change for account: ', NEW.`account_id`),
    CONCAT('On ', NOW(),' your balance was changed from ', NEW.`old_sum`,' to ',NEW.`new_sum`, '.')
    );
END$$
DELIMITER ;

CALL usp_withdraw_money(10, 20);