var express = require("express");
var router = express.Router();
var db = require("../model/helper");

var userMustBeLogged = require("../guards/userMustBeLogged");

router.get(`/users`, userMustBeLogged, (req, res) => {
  db(
    `SELECT * FROM users WHERE area_id = ${req.area_id} AND id != ${req.user_id}`
  ).then(results => {
    res.send(results.data);
  });
});

module.exports = router;
