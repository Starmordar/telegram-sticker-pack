const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

const routes = require("./routes/router");
const { port, login_bot_token, secret } = require("./config/config");
const { fetchUpdates } = require("./telegram/bots/loginBot");
const { pool } = require("./database/queries");

const botUrl = "https://api.telegram.org/bot";
const siteUrl = `http://167.71.13.201:3000/`;

const botUpdateOffset = 0,
  limitsOfUpdates = 100,
  timeoutLongPolling = 30;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(session({
  store: new pgSession({
    pool: pool,
    tableName: "UserSession"
  }),
  secret: secret,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } //30 days
}));

app.use((req, res, next) => {
  if (req.cookies['connect.sid'] && !req.session.user) {
    res.clearCookie('connect.sid');
  }
  next();
});

app.use("/", routes);

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

fetchUpdates(botUpdateOffset, limitsOfUpdates, timeoutLongPolling, botUrl, login_bot_token, siteUrl);

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});
