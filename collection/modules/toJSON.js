const toJSON = function() {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  return JSON.stringify(arr)
}

module.exports = toJSON
