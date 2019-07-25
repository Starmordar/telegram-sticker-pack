const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  login_bot_token: process.env.TELEGRAM_LOGIN_BOT_TOKEN,

  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  db_port: process.env.DB_PORT,
  
  secret: process.env.SESSION_SECRET_KEY
};
