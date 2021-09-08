const reduce = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }

  let new_val = null
  if (arguments.length >= 2) {
    new_val = arguments[1];
  }
  for (let i = 0; i < arr.length; i++) {
    new_val = callback(new_val, arr[i], i, arr)
  }
  return new_val
}

module.exports = reduce
