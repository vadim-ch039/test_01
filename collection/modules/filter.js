const filter = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }

  const result = [];
  for (const item in arr) {
    if (callback(arr[item])) {
      result.push(arr[item]);
    }
  }
  this.collection = result
  return this;
}

module.exports = filter