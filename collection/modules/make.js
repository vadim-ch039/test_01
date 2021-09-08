const make = function (arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  this.collection = arr
  this.__type = 'Collection'
  return this
}

module.exports = make
