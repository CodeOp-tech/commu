var express = require("express");
var router = express.Router();
var db = require("../model/helper");
var jwt = require("jsonwebtoken");
var userMustBeLogged = require("../guards/userMustBeLogged");
//
// GET ALL
router.get("/", userMustBeLogged, (req, res) => {
  db(
    `SELECT * FROM users WHERE area_id = ${req.area_id} AND id != ${req.user_id}`
  ).then(results => {
    res.send(results.data);
  });
});
//
// GET user's profile by id
router.get("/profile", userMustBeLogged, (req, res) => {
  db(`SELECT * FROM users WHERE id = ${req.user_id}`).then(results => {
    delete results.data[0].password;
    res.send(results.data[0]);
  });
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
      "${req.body.about}");
      `
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
          user_id: results.data[0].id,
          area_id: results.data[0].area_id
        },
        "cheese"
      );
      res.send({
        msg: "Login successful!",
        token,
        user_id: results.data[0].id
      });
    } else res.status(400).send({ msg: "Login not successful" });
  });
});
//

// UPDATE THE DATABASE
router.put("/profile", userMustBeLogged, (req, res) => {
  db(`UPDATE users SET
  full_name = "${req.body.full_name}",
  email = "${req.body.email}",
  password = "${req.body.password}",
  area_id = "${req.body.area_id}",
  img = "${req.body.img}",
  skills = "${req.body.skills}",
  about = "${req.body.about}"
  WHERE id= ${req.user_id}`)
    .then(results => {
      db(`SELECT * FROM users WHERE id= ${req.user_id};`)
        .then(results => {
          delete results.data[0].password;
          res.send(results.data[0]);
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
// ENDPOINT: ALL JOBS FROM ONE USER
router.get("/:id/jobs", async function(req, res) {
  let results = await db(`
      SELECT *
      FROM jobs
      WHERE jobs.user_id = ${req.params.id}
  `);
  if (results.error) {
    res.send(results.error);
  }
  res.send(results.data);
});
//
module.exports = router;
