const values = function () {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  return arr
}

module.exports = values