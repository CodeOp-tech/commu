var express = require("express");
var router = express.Router();
var db = require("../model/helper");
var userMustBeLogged = require("../guards/userMustBeLogged");
//
// GET ALL
// router.get("/", (req, res) => {
//   db("SELECT * FROM jobs;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// });
//
// GET ID
router.get("/:id", (req, res) => {
  db(`SELECT * FROM jobs WHERE id = ${req.params.id}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});
//

// Get jobs by area_id
router.get("/", userMustBeLogged, (req, res) => {
  let query = `SELECT * FROM jobs LEFT JOIN users
    ON users.id = jobs.user_id WHERE area_id = ${req.area_id} AND user_id != ${req.user_id}`;
  console.log(query);
  db(query).then(results => {
    res.send(results.data);
  });
});

// POST INTO DATABASE
router.post("/", (req, res) => {
  db(
    `INSERT INTO jobs (
        user_id,
        title,
        description,
        price,
        date_time

        ) VALUES (
        "${req.body.user_id}",
        "${req.body.title}",
        "${req.body.description}",
        "${req.body.price}",
        "${req.body.date_time}",
        ");`
  )
    .then(results => {
      db("SELECT * FROM jobs ORDER BY id ASC;")
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
  db(`UPDATE jobs SET
    user_id = "${req.body.user_id}",
    title = "${req.body.title}",
    description = "${req.body.description}",
    price = "${req.body.price}",
    date_time = "${req.body.date_time}"
    );`)
    .then(results => {
      db(`SELECT * FROM jobs ORDER BY id ASC;`)
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
  db(`DELETE FROM jobs WHERE id = ${req.params.id}`)
    .then(results => {
      db("SELECT * FROM jobs ORDER BY id ASC;")
        .then(results => {
          res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
});
//
// TABLE JOIN: JOBS
router.get("/:user_id", async function(req, res) {
  let results = await db(`
        SELECT jobs.user_id
        FROM jobs
        LEFT JOIN users
        ON users.id = jobs.user_id
        WHERE user.id = ${req.params.user_id}
    `);
  if (results.error) {
    res.send(results.error);
  }
  res.send(results.data);
});
//
module.exports = router;
