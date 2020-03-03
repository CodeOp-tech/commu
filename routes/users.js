var express = require("express");
var router = express.Router();
var db = require("../model/helper");
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
// GET ID
router.get("/:id", (req, res) => {
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

      ) VALUES ("
      ${req.body.full_name},
      ${req.body.email},
      ${req.body.password},
      ${req.body.area_id},
      ${req.body.img},
      ${req.body.skills},
      ${req.body.about}
      ");`
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
// UPDATE THE DATABASE
router.put("/:id", (req, res) => {
  db(`UPDATE users SET
  full_name = "${req.body.full_name}",
  email = "${req.body.email}",
  password = "${req.body.password}",
  area_id = "${req.body.area_id}",
  skills = "${req.body.skils}",
  about = "${req.body.about}"
  );`
  )
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
