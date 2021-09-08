const chunk = function (count) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  if (Number.isNaN(Number(count))) {
    throw new TypeError(count + ' is not a number');
  }

  let new_arr = []
  let chunk_arr = []

  for (let i = 0; i < arr.length; i++) {
    chunk_arr.push(arr[i])
    if (i % count === count - 1 && i !== 0 || count === 1) {
      new_arr.push(chunk_arr)
      chunk_arr = []
    } else if (i === arr.length - 1) {
      new_arr.push(chunk_arr)
      chunk_arr = []
    }
  }
  this.collection = new_arr
  return this
}

module.exports = chunk
