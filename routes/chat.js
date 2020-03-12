var express = require("express");
var router = express.Router();
var db = require("../model/helper");
require("dotenv").config();
var Pusher = require("pusher");
var userMustBeLogged = require("../guards/userMustBeLogged");

var channels_client = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "eu",
  useTLS: true
});

router.post("/:receiver_id", userMustBeLogged, (req, res) => {
  let { receiver_id } = req.params;
  let text = req.body.message;
  let sender_id = req.user_id;
  db(`INSERT INTO chat(
    sender_id,
    receiver_id,
    text
  )
  VALUES(
    "${sender_id}",
    "${receiver_id}",
    "${text}"
  );`)
    .then(results => {
      res.send(result.data);
    })
    .catch(err => res.status(500).send(err));
});
/*
  try {
    //store in DB
    Message.create({ text, sender_id, receiver_id });
  } catch (err) {
    res.status(500).send(err);
  }
*/
//   const ids = [sender_id, receiver_id].sort();
//   let channel = `chat-${ids[0]}-${ids[1]}`;

//   //send to Pusher
//   channels_client.trigger(channel, "message", {
//     text,
//     sender_id,
//     receiver_id
//   });

//   res.send({ msg: "Sent" });
// });

router.get("/:receiver_id", userMustBeLogged, async (req, res) => {
  let { receiver_id } = req.params;
  let sender_id = req.user_id;
  db(
    `SELECT text FROM chat WHERE receiver_id = ${receiver_id} AND user_id=${sender_id} ORDER BY id DESC LIMIT 10`
  )
    .then(results => {
      res.send(result.data);
    })
    .catch(err => res.status(500).send(err));
});

//   let { id1, id2 } = req.params;
//   let messages = await Message.findAll({
//     where: {
//       sender_id: {
//         [Op.in]: [id1, id2]
//       },
//       receiver_id: {
//         [Op.in]: [id1, id2]
//       }
//     },
//     limit: 10,
//     order: [["id", "DESC"]]
//   });

//   res.send(messages.reverse());
// });

module.exports = router;
