const contains = function (search) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  if (!(typeof search === 'string' || search.__proto__ === RegExp.prototype)) {
    return new Error('Search has wrong format[string|regex]')
  }

  let new_arr = []
  let skip = true
  let regex = new RegExp(search)

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (regex.exec(element)) {
      return true
    }
  }
  return false
}

module.exports = contains
