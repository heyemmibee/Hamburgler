DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(150) NOT NULL,
devoured BOOLEAN NOT NULL,
);