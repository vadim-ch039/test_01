const sort = function (compareFunction) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  if (compareFunction && typeof compareFunction !== 'function') {
    return new Error(compareFunction + ' is not a function')
  }

  this.collection = this.collection.sort(compareFunction)
  return this
}

module.exports = sort
