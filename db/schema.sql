### Schema

-- CREATE DATABASE heroku_4791d32306e6d11;
-- USE heroku_4791d32306e6d11;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
