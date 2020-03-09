var express = require("express");
var router = express.Router();
var db = require("../model/helper");
var jwt = require("jsonwebtoken");

router.get(`/users`, (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) res.status(401).send({ msg: "Please provide a token." });
  else {
    jwt.verify(token, "cheese", function(err, decoded) {
      if (err) res.status(401).send({ msg: "Please provide a valid token" });
      else {
        db(
          `SELECT * FROM users WHERE area_id = ${decoded.area_id} AND id != ${decoded.user_id}`
        ).then(results => {
          res.send(results.data);
        });
      }
    });
  }
});

module.exports = router;
