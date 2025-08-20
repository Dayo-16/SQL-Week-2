CREATE TABLE student (
    id INT PRIMARY KEY,
    fullName VARCHAR(100),
    age INT
);
INSERT INTO student (id, fullName, age)
VALUES
    (1, 'Alice Johnson', 20),
    (2, 'Michael Smith', 22),
    (3, 'Victoria Brown', 19);
UPDATE student
SET age = 20
WHERE id = 2;
