const isEmpty = function () {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  return arr.length > 0 ? false : true
}

module.exports = isEmpty
