const crypto = require('crypto');

const { isEmptyObject } = require('../helper/functions');

function getUnixCurrentTimeStamp() {
    return Math.floor(new Date() / 1000);
}

function isOutdatedData(userData) {
    const oneDayInSeconds = 86400;

    if (getUnixCurrentTimeStamp() - userData.auth_date > oneDayInSeconds) {
        return true;
    }
    return false;
}

function getAuthentificationHash(bot_token, userData) {
    const secretKey = crypto.createHash('sha256').update(bot_token).digest();

    let dataCheckingArray = [];
    for (const key in userData) {
        if (key != 'hash') {
            dataCheckingArray.push(`${key}=${userData[key]}`);
        }
    }

    let dataCheckingString = dataCheckingArray.sort().join('\n');

    const checkHash = crypto
        .createHmac('sha256', secretKey)
        .update(dataCheckingString)
        .digest('hex');

    return checkHash;
}

function checkTelegramAuthorization(bot_token, userData) {
    if (isEmptyObject(userData)) return "Empty query";
    if (isOutdatedData(userData)) return "Data is outdated";

    const checkHash = getAuthentificationHash(bot_token, userData);
    if (checkHash !== userData.hash) return "Data is NOT from Telegram"

    return "Correct data"
}

module.exports = checkTelegramAuthorization