const express = require("express");
const router = express.Router();
const path = require("path");

const { login_bot_token } = require("../config/config");
const checkTelegramAuthorization = require('../telegram/authorization/authorization');
const { query } = require('../database/queries');
const { sessionChecker } = require('./functions/middleware');
const { isEmptyArray } = require('../helper/functions');
const { transformUserDataToArray } = require('./functions/func')

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
      let queryStr = `select * from "User" where user_id = $1`,
        values = [userData.id];

      query(queryStr, values)
        .then((user) => {
          if (isEmptyArray(user)) {

            queryStr =
              `insert into "User"(user_id, first_name, last_name, username, photo_uri)
              values ($1, $2, $3, $4, $5)`;
            values = transformUserDataToArray(userData);

            query(queryStr, values)
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

    let queryStr = `delete from "UserSession"
    where sess::json#>>'{user}' = $1;`,
      values = [req.session.user];

    query(queryStr, values)
      .then(() => {
        res.clearCookie(['connect.sid']);
        res.redirect('/');
      })
      .catch((err) => next(err));

  } else {
    res.redirect('/');
  }
});


router.get('/some', function (req, res, next) {
  res.send("Slim Shady");
})

module.exports = router;
