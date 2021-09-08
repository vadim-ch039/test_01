const sortBy = function (column, compareFunction) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  if (typeof column !== 'string') {
    throw new TypeError(column + ' is not a string');
  }
  if (compareFunction && typeof compareFunction !== 'function') {
    return new Error(compareFunction + ' is not a function')
  }

  let new_arr = []
  let column_arr = []
  let column_arr_value = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (Object.hasOwnProperty.call(element, column)) {
      column_arr.push({ [i]: element[column] })
      column_arr_value.push(element[column])
    }
  }

  column_arr_value = column_arr_value.sort(compareFunction)
  for (const key in column_arr) {
    const element = column_arr[key]
    for (const key_el in element) {
      if (Object.hasOwnProperty.call(element, key_el)) {
        const el_el = element[key_el];
        let new_index = column_arr_value.indexOf(el_el)
        new_arr[new_index] = arr[key_el]
      }
    }
  }
  this.collection = new_arr
  return this
}

module.exports = sortBy
