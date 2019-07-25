const { isEmptyObject } = require('../../helper/functions');

function transformUserDataToArray(data) {
    if (isEmptyObject(data)) return [];

    let arr = [];
    for (const key in data) {
        if (key !== 'hash' && key !== 'auth_date') arr.push(data[key]);
    }
    
    return arr;
}

module.exports = {
    transformUserDataToArray: transformUserDataToArray
}