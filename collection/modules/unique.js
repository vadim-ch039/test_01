const unique = function () {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }

  let new_arr = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (new_arr.indexOf(element) === -1) {
      new_arr.push(element)
    }
  }

  this.collection = new_arr
  return this
}

module.exports = unique