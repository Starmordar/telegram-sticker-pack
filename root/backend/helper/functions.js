function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function isEmptyArray(arr) {
    return (!Array.isArray(arr) || arr.length === 0)
}

module.exports = {
    isEmptyArray: isEmptyArray,
    isEmptyObject: isEmptyObject
}