require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "commu",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE if exists users; CREATE TABLE users(  id INT NOT NULL AUTO_INCREMENT,
    full_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    area_id INT(255) NOT NULL,
    img varchar(255) NOT NULL,
    skills varchar(255) NOT NULL,
    about varchar(255) NOT NULL,
    PRIMARY KEY (id));`;

  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `users` was successful!");

    console.log("Closing...");
  });

  sql = `DROP TABLE if exists jobs; CREATE TABLE jobs(  id INT NOT NULL AUTO_INCREMENT,
user_id INT NOT NULL,
 description varchar(255) NOT NULL,
price INT(255) NOT NULL,
  date_time varchar(255) NOT NULL,
 PRIMARY KEY (id) );`;

  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `jobs` was successful!");

    console.log("Closing...");
  });

  sql = `DROP TABLE if exists areas; CREATE TABLE areas(  id INT NOT NULL AUTO_INCREMENT,
hood INT NOT NULL,
PRIMARY KEY (id));`;

  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `areas` was successful!");

    console.log("Closing...");
  });

  sql = `DROP TABLE if exists favorites; CREATE TABLE favorites( id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
 profile_id INT NOT NULL,
  PRIMARY KEY (id));`;

  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `favorites` was successful!");

    console.log("Closing...");
  });

  sql = `DROP TABLE if exists ratings; CREATE TABLE ratings(
    id INT NOT NULL AUTO_INCREMENT,
  rating INT NOT NULL,
  user_id INT NOT NULL,
    PRIMARY KEY (id)
   );`;

  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `ratings` was successful!");

    console.log("Closing...");
  });

  con.end();
});
