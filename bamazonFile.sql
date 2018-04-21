
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
 
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (255) NOT NULL,
department_name VARCHAR (255) DEFAULT NULL,
price DECIMAL (8,2) DEFAULT NULL,
stock_quantity INT DEFAULT NULL,
PRIMARY KEY (id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Beats Bluetooh Speaker', 'Electronics', 259.99, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Printer', 'Electronics', 67.99, 47);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mac Book', 'Electronics', 1199.99, 288);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Computer Monitor', 'Electronics', 229.99, 37);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Desk', 'Furniture', 559.99, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Office Chair', 'Furniture', 159.99, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Sleeping pod', 'Furniture', 259.99, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Keurig', 'Kitchen', 189.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pressure Cooker', 'Kitchen', 199.99, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Water Machine', 'Kitchen', 139.99, 17);