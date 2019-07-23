const crypto = require('crypto');

function getUnixTime() {
    return Math.floor(new Date() / 1000);
}

function isValidDate(userData) {
    if (getUnixTime() - userData.auth_date > 86400) { //1 day
        return false;
    }
    return true;
}

function isValidAuthentification(bot_token, userData) {
    if (Object.keys(userData).length === 0 && userData.constructor === Object) {
        return false;
    }
    if(isValidDate(userData) === false){
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

    const checkHash = crypto
        .createHmac('sha256', secretKey)
        .update(dataCheckingString)
        .digest('hex');

    return checkHash === userData.hash;
}

const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies['connect.sid']) {
        res.redirect('/profile');
    } else {
        next();
    }
};

module.exports = {
    isValidAuthentification: isValidAuthentification,
    sessionChecker: sessionChecker
}