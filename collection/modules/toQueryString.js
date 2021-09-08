const toQueryString = function() {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }

  let string = ''

  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      const element = arr[key];
      string += String(element)
    }
  }
  return string
}

module.exports = toQueryString
