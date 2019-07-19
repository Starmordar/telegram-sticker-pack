const axios = require("axios");

function createSeamlessLogin(chat_id, botUrl, bot_token, siteUrl) {
  axios
    .post(`${botUrl}${bot_token}/sendMessage`, {
      chat_id: chat_id,
      text: "Lorem lorem lorem",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Lorem lorem",
              login_url: {
                url: siteUrl
              }
            }
          ]
        ]
      }
    })
    .then(function(response) {
      // console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

module.exports = {
  createSeamlessLogin: createSeamlessLogin
};
