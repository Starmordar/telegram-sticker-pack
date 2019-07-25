const express = require("express");
const router = express.Router();
const path = require("path");

const { login_bot_token } = require("../config/config");
const checkTelegramAuthorization = require('../telegram/authorization/authorization');
const { query } = require('../database/queries');
const { sessionChecker } = require('./functions/middleware');
const { isEmptyArray } = require('../helper/functions');

router.get("/", sessionChecker, function (req, res, next) {
  const userData = req.query;

  const authorizationState = checkTelegramAuthorization(login_bot_token, userData);
  switch (authorizationState) {
    case "Empty query":
      res.sendFile(path.resolve(__dirname + "/../../frontend/src/index.html"));
      break;
    case "Data is outdated":
      res.sendFile(path.resolve(__dirname + "/../../frontend/src/index.html"));
      break;
    case "Data is NOT from Telegram":
      res.sendFile(path.resolve(__dirname + "/../../frontend/src/index.html"));
      break;
    case "Correct data":
      const checkUser = `select * from "User" where user_id = ${userData.id}`;

      query(checkUser)
        .then((user) => {
          if (isEmptyArray(user)) {
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
      break;
    default:
      break;
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
