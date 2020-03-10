var jwt = require("jsonwebtoken");


function userMustBeLogged(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) res.status(401).send({ msg: "Please provide a token." });
  else {
    jwt.verify(token, "cheese", function(err, decoded) {
      if (err) res.status(401).send({ msg: "Please provide a valid token" });
      else {
       
        req.user_id = decoded.user_id;
        req.area_id = decoded.area_id;
        next();
          }
       
    });
  }
}

module.exports = userMustBeLogged;
