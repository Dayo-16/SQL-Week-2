-- Question 1: Create a new database called salesDB
CREATE DATABASE IF NOT EXISTS salesDB;
-- Switch into it
USE salesDB;

-- Create a sample table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

-- Insert some records
INSERT INTO products (name, price)
VALUES ('Laptop', 1200.50), ('Phone', 650.00), ('Tablet', 300.75);

-- View records
SELECT * FROM products;

-- Question 2: Drop a database called demo (if it exists)
DROP DATABASE IF EXISTS demo;
