require("dotenv").config();
const mysql = require("mysql");
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
//
const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "commu",
  multipleStatements: true
});
//
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //
  // USERS TABLE
  let sql = `DROP TABLE if exists users; CREATE TABLE users(
        id INT NOT NULL AUTO_INCREMENT,
        full_name varchar(255) NOT NULL,
        email varchar(255),
        password varchar(255),
        area_id INT,
        img varchar(255),
        skills varchar(255),
        about varchar(500),
        PRIMARY KEY (id)
    );`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `users` was successful!");
    console.log("Closing...");
  });
  //
  // JOBS TABLE
  sql = `DROP TABLE if exists jobs; CREATE TABLE jobs(
        id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        title varchar(50) NOT NULL,
        description varchar(500) NOT NULL,
        price varchar(50),
        date_time varchar(50),
        PRIMARY KEY (id)
    );`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log('Table creation "jobs" was successful!');
    console.log("Closing...");
  });
  //
  // AREAS TABLE
  sql = `DROP TABLE if exists areas; CREATE TABLE areas(
        id INT NOT NULL AUTO_INCREMENT,
        hood varchar(50) NOT NULL,
        PRIMARY KEY (id)
    );`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `areas` was successful!");
    console.log("Closing...");
  });
  //
  // FAVORITES TABLE
  sql = `DROP TABLE if exists favorites; CREATE TABLE favorites(
        id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        profile_id INT NOT NULL,
        PRIMARY KEY (id)
    );`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `favorites` was successful!");
    console.log("Closing...");
  });
  //
  // RATINGS TABLE
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
  // CHAT
  sql = `DROP TABLE if exists chat; CREATE TABLE chat(
    id INT NOT NULL AUTO_INCREMENT,
    text varchar(500) NOT NULL,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    PRIMARY KEY (id)
);`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `chat` was successful!");
    console.log("Closing...");
  });

  //
  con.end();
});
