const sortDesc = function (compareFunction) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  if (compareFunction && typeof compareFunction !== 'function') {
    return new Error(compareFunction + ' is not a function')
  }

  this.collection = this.collection.sort(compareFunction ? compareFunction : function (a, b) { return b - a })
  return this
}

module.exports = sortDesc
