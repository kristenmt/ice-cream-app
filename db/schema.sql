CREATE DATABASE IF NOT EXISTS icecream_db;
USE icecream_db;
DROP TABLE IF EXISTS flavors;
CREATE TABLE flavors
(
	id int NOT NULL AUTO_INCREMENT,
	cone_name varchar(255) NOT NULL,
	eaten BOOL DEFAULT false,
	PRIMARY KEY (id)
);