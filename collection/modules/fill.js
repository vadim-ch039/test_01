const fill = function (lenght, value) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  if (Number.isNaN(Number(lenght))) {
    return new Error(lenght + ' is not a number')
  }

  let new_arr = []

  for (let i = 0; i < lenght; i++) {
    new_arr.push([value])
  }

  this.collection = new_arr
  return this
}

module.exports = fill