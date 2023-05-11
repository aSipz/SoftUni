# 1
SELECT 
    `title`
FROM
    `books`
WHERE
    SUBSTR(`title`, 1, 3) = 'The'
ORDER BY `id`;

# 2
UPDATE `books` 
SET 
    `title` = REPLACE(`title`, 'The', '***')
WHERE
    SUBSTR(`title`, 1, 3) = 'The';
    
SELECT 
    `title`
FROM
    `books`
WHERE
    SUBSTR(`title`, 1, 3) = '***'
ORDER BY `id`;

# 3
SELECT 
    ROUND(SUM(`cost`), 2)
FROM
    `books`;
    
# 4
SELECT 
    CONCAT_WS(' ', `first_name`, `last_name`) AS 'Full Name',
    TIMESTAMPDIFF(DAY, `born`, `died`) AS 'Days Lived'
FROM
    `authors`;
    
# 5
SELECT 
    `title`
FROM
    `books`
WHERE
    `title` LIKE '%Harry Potter%';