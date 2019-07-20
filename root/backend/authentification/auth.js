const crypto = require('crypto');



function checkAuthentification(bot_token, userData) {
    if (Object.keys(userData).length === 0 && userData.constructor === Object) {
        return false;
    }
    const secretKey = crypto.createHash('sha256').update(bot_token).digest();

    let dataCheckingArray = [];
    for (const key in userData) {
        if (key != 'hash') {
            dataCheckingArray.push(`${key}=${userData[key]}`);
        }
    }

    let dataCheckingString = dataCheckingArray.sort().join('\n');

    const checkHash = crypto.createHmac('sha256', secretKey).
        update(dataCheckingString)
        .digest('hex');
    console.log(checkHash === userData.hash);
    return checkHash === userData.hash;
}


module.exports = {
    checkAuthentification: checkAuthentification
}