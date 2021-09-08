const get = function (value) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }

  return this.collection[value]
}

module.exports = get
