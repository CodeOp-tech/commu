var express = require("express");
var router = express.Router();
var db = require("../model/helper");
var jwt = require("jsonwebtoken");
//
// GET ALL
router.get("/", (req, res) => {
  db("SELECT * FROM users;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});
//
// GET user's profile by id
router.get("/profile", (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) res.status(401).send({ msg: "Please provide a token." });
  else {
    jwt.verify(token, "cheese", function(err, decoded) {
      if (err) res.status(401).send({ msg: "Please provide a valid token" });
      else {
        res.send({ msg: "Here's your protected data!" });
      }
    });
  }
  db(`SELECT * FROM users WHERE id = ${req.params.id}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});
//
// POST INTO DATABASE
router.post("/", (req, res) => {
  db(
    `INSERT INTO users (
      full_name,
      email,
      password,
      area_id,
      img,
      skills,
      about

      ) VALUES (
      "${req.body.full_name}",
      "${req.body.email}",
      "${req.body.password}",
      "${req.body.area_id}",
      "${req.body.img}",
      "${req.body.skills}",
      "${req.body.about}");`
  )
    .then(results => {
      db("SELECT * FROM users ORDER BY id ASC;")
        .then(results => {
          res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
});
//

// Check if the email and password is the same as the ones in database.
// Then generate a jsonwebtoken.

router.post("/login", function(req, res, next) {
  const attemptEmail = req.body.email;
  const attemptPassword = req.body.password;

  db(
    `SELECT * FROM users WHERE email = "${attemptEmail}" AND password = "${attemptPassword}"`
  ).then(results => {
    if (results.data.length) {
      const token = jwt.sign(
        {
          user_id: results.data[0].id
        },
        "cheese"
      );
      res.send({ msg: "Login successful!", token });
    } else res.status(400).send({ msg: "Login not successful" });
  });
});
//

// UPDATE THE DATABASE
router.put("/:id", (req, res) => {
  db(`UPDATE users SET
  full_name = "${req.body.full_name}",
  email = "${req.body.email}",
  password = "${req.body.password}",
  area_id = "${req.body.area_id}",
  skills = "${req.body.skils}",
  about = "${req.body.about}"
  );`)
    .then(results => {
      db(`SELECT * FROM users ORDER BY id ASC;`)
        .then(results => {
          res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
});
//
// DELETE FROM DATABASE
router.delete("/:id", (req, res) => {
  db(`DELETE FROM users WHERE id = ${req.params.id}`)
    .then(results => {
      db("SELECT * FROM users ORDER BY id ASC;")
        .then(results => {
          res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
});
//
module.exports = router;
