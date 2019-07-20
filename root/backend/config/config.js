const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  bot_token: process.env.TELEGRAM_BOT_TOKEN
};
