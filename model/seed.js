require("dotenv").config();
const mysql = require("mysql");
//
const data = require("../client/src/data.json");
//
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
//
const con = mysql.createConnection({
    host: DB_HOST || "127.0.0.1",
    user: DB_USER || "root",
    password: DB_PASS || "root",
    database: DB_NAME || "commu",
    multipleStatements: true
});
//
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
//
// USERS INSERT
data.users.forEach(e => {
    let sql = `INSERT INTO users (
        full_name,
        email,
        password,
        area_id,
        img,
        skills,
        about
    ) VALUES (
        "${e.full_name}",
        "${e.email}",
        "${e.password}",
        "${e.area_id}",
        "${e.img}",
        "${e.skills}",
        "${e.about}"
    );`;
    con.query(sql, function(err, result) {
        if (err) throw err;
    });
});
//
// AREAS INSERT
data.areas.forEach(e => {
    let sql = `INSERT INTO areas (
        hood
    ) VALUES (
        "${e.hood}"
    );`;
    con.query(sql, function(err, result) {
        if (err) throw err;
    });
});
//
con.end();
});