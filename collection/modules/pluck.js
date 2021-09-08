const pluck = function (path) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  if (!(typeof path === 'string')) {
    return new Error(path + ' is not a string')
  }

  let new_arr = []
  let skip = true

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    new_arr.push(element[path])
  }
  this.collection = new_arr
  return this
}

module.exports = pluck
