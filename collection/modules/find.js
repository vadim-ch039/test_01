const find = function (search) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  if (!(typeof search === 'string' || search.__proto__ === RegExp.prototype)) {
    return new Error('Search has wrong format[string|regex]')
  }

  let this_arg = this
  let search_element = undefined
  if (arguments.length >= 2) {
    this_arg = arguments[1];
  }
  let regex = new RegExp(search)

  for (let i = 0; i < arr.length; i++) {
    if (regex.exec(arr[i])) {
      search_element = arr[i]
    }
  }
  return search_element
}

module.exports = find
