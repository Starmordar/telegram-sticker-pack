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
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function fetchUpdates(offset, limit, timeout, botUrl, bot_token, siteUrl) {
  axios
    .post(`${botUrl}${bot_token}/getUpdates`, {
      offset: offset,
      limit: limit,
      timeout: timeout,
    })
    .then(function (response) {
      let updates = response.data.result;

      if (updates === undefined || updates.length == 0) {
        return [];
      }

      updates.map((update) => handleUpdate(update, botUrl, bot_token, siteUrl))
      return updates
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function (updates) {
      if (!(updates === undefined || updates.length == 0)) {
        offset = updates[updates.length - 1].update_id + 1;
      }
      
      fetchUpdates(offset, limit, timeout, botUrl, bot_token, siteUrl)
    });
}

function handleUpdate(update, botUrl, bot_token, siteUrl) {
  const chatID = update.message.chat.id;
  if (update.message.text === '/start') {
    createSeamlessLogin(chatID, botUrl, bot_token, siteUrl)
  }
}

module.exports = {
  fetchUpdates: fetchUpdates
};