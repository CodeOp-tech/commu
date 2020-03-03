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
    );`
    )
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
// TABLE JOIN
router.join("/:id", (req, res) => {
    db(`
    SELECT users.area_id
    FROM users
    LEFT JOIN areas
    ON users.area_id = areas.id
    `);
})
//
module.exports = router;