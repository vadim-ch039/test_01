const skipUntil = function (value) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }

  let new_arr = []
  let skip = true

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element === value) {
      skip = false
    }
    if (!skip) {
      new_arr.push(element)
    }
  }
  this.collection = new_arr
  return this
}

module.exports = skipUntil
