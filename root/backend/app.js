const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes/router");
const { port, bot_token, chat_id } = require("./config/config");
const botUrl = "https://api.telegram.org/bot";

const siteUrl = `http://167.71.13.201:${port}/`;

const { createSeamlessLogin } = require("./routes/botAPI");

let app = express();

app.use("/", routes);
app.use(bodyParser.json());

createSeamlessLogin(chat_id, botUrl, bot_token, siteUrl);

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});
