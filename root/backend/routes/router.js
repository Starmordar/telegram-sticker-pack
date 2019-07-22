const express = require("express");
const router = express.Router();
const path = require("path");

const { bot_token } = require("../config/config");
const { isValidAuthentification } = require('../authentification/auth');
const { query } = require('../database/requests');


var sessionChecker = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/profile');
  } else {
    next();
  }
};

router.get("/", sessionChecker, function (req, res) {
  const userData = req.query;

  if (isValidAuthentification(bot_token, userData) === true) {
    const checkUser = `select * from "User" where user_id = ${userData.id}`;

    query(checkUser)
      .then((data) => {
        if (data === undefined || data.length == 0) {
          const addNewUser =
            `insert into "User"(user_id, first_name, last_name, username, photo_uri)
            values (${userData.id}, '${userData.first_name}', '${userData.last_name}', '${userData.username}', '${userData.photo_url}')`;

          query(addNewUser)
            .then(() => {
              req.session.user = userData.id;
              res.redirect('/profile');
            })
            .catch(err => console.log(err));
        } else {
          req.session.user = userData.id
          res.redirect('/profile')
        }
      })
      .catch(err => console.log(err));
  } else {
    res.sendFile(path.resolve(__dirname + "/../../frontend/src/index.html"));
  }
});

router.get('/profile', function (req, res) {

  res.sendFile(path.resolve(__dirname + "/../../frontend/src/profile.html"));
});

module.exports = router;
