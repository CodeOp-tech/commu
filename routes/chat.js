var express = require("express");
var router = express.Router();
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
  /*
  try {
    //store in DB
    Message.create({ text, sender_id, receiver_id });
  } catch (err) {
    res.status(500).send(err);
  }
*/
  const ids = [sender_id, receiver_id].sort();
  let channel = `chat-${ids[0]}-${ids[1]}`;

  //send to Pusher
  channels_client.trigger(channel, "message", {
    text,
    sender_id,
    receiver_id
  });

  res.send({ msg: "Sent" });
});

router.get("/:id1/:id2", async (req, res) => {
  let { id1, id2 } = req.params;
  let messages = await Message.findAll({
    where: {
      sender_id: {
        [Op.in]: [id1, id2]
      },
      receiver_id: {
        [Op.in]: [id1, id2]
      }
    },
    limit: 10,
    order: [["id", "DESC"]]
  });

  res.send(messages.reverse());
});

module.exports = router;
