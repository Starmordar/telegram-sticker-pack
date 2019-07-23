const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

const routes = require("./routes/router");
const { port, bot_token, secret } = require("./config/config");
const { fetchUpdates } = require("./routes/botAPI");
const { pool } = require("./database/requests");

const botUrl = "https://api.telegram.org/bot";
const siteUrl = `http://167.71.13.201:${port}/`;

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

fetchUpdates(botUpdateOffset, limitsOfUpdates, timeoutLongPolling, botUrl, bot_token, siteUrl);

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});
