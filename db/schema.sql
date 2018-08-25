CREATE DATABASE icecream_db;
USE icecream_db;

CREATE TABLE flavors
(
	id int NOT NULL AUTO_INCREMENT,
	flavor varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);