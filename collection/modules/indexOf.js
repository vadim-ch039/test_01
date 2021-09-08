const indexOf = function(search) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }

  let i = 0
  if (arguments.length >= 2) {
    i = arguments[1];
  }
  for (; i < arr.length; i++) {
    if (arr[i] === search) {
      return i
    }
  }
  return -1
}

module.exports = indexOf
