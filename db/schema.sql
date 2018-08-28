CREATE DATABASE icecream_db;
USE icecream_db;

CREATE TABLE flavors
(
	id int NOT NULL AUTO_INCREMENT,
	cone_name varchar(255) NOT NULL,
	eaten BOOLEAN NOT NULL DEFAULT 0,
	PRIMARY KEY (id)
);