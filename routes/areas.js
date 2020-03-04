var express = require("express");
var router = express.Router();
var db = require("../model/helper");
//
// GET ALL
router.get("/", (req, res) => {
  db("SELECT * FROM areas;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});
//
// GET ID
router.get("/:id", (req, res) => {
  db(`SELECT * FROM areas WHERE id = ${req.params.id}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});
//
// POST INTO DATABASE
router.post("/", (req, res) => {
  db(
    `INSERT INTO areas (
        hood

        ) VALUES ("
        ${req.body.hood}
        ");`
  )
    .then(results => {
        db("SELECT * FROM areas ORDER BY id ASC;")
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
  db(`UPDATE areas SET
    hood = "${req.body.hood}"
    );`)
    .then(results => {
      db(`SELECT * FROM areas ORDER BY id ASC;`)
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
  db(`DELETE FROM areas WHERE id = ${req.params.id}`)
    .then(results => {
        db("SELECT * FROM areas ORDER BY id ASC;")
        .then(results => {
          res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
});
//
// ENDPOINT: ALL USERS IN ONE AREA
router.get("/:area_id/users", async function(req, res) {
    let results = await db(`
        SELECT users.*
        FROM users
        WHERE users.area_id = ${req.params.areas_id}
    `);
    if (results.error) {
        res.send(results.error);
    }
    res.send(results.data);
    });
//
// ENDPOINT + TABLE JOIN: ALL JOBS IN ONE AREA
router.get("/:area_id/jobs", async function(req, res) {
    let results = await db(`
        SELECT jobs.*
        FROM jobs
        LEFT JOIN users
        ON users.id = jobs.user_id
        WHERE users.area_id = ${req.params.areas_id}
    `);
    if (results.error) {
        res.send(results.error);
    }
    res.send(results.data);
    });
//
module.exports = router;
