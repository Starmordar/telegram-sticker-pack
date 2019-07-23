const express = require("express");
const router = express.Router();
const path = require("path");

const { bot_token } = require("../config/config");
const { isValidAuthentification, sessionChecker } = require('../authentification/auth');
const { query } = require('../database/requests');

router.get("/", sessionChecker, function (req, res, next) {
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
            .catch(err => next(err));
        } else {
          req.session.user = userData.id;
          res.redirect('/profile');
        }
      })
      .catch(err => next(err));
  } else {
    res.sendFile(path.resolve(__dirname + "/../../frontend/src/index.html"));
  }
});

router.get('/profile', function (req, res) {
  if (req.session.user && req.cookies['connect.sid']) {
    res.sendFile(path.resolve(__dirname + "/../../frontend/src/profile.html"));
  } else {
    res.redirect('/');
  }
});

router.get('/logout', function (req, res, next) {
  if (req.session.user && req.cookies['connect.sid']) {
    const deleteUser = `delete from "UserSession"
                    where sess::json#>>'{user}' = '${req.session.user}';`
    
    query(deleteUser)
      .then(() => {
        res.clearCookie(['connect.sid']);
        res.redirect('/');
      })
      .catch((err) => next(err));

  } else {
    res.redirect('/');
  }
});

module.exports = router;
