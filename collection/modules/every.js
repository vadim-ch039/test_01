const every = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }

  for (let i = 0; i < arr.length; i++) {
    let result = callback.call(this, arr[i], i, arr)
    if (!result) {
      return false
    }
  }
  return true
}

module.exports = every
