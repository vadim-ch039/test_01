const paginate = function (litmit) {
  if (Number.isNaN(Number(litmit))) {
    throw new TypeError(litmit + ' is not a number');
  }
  this.litmit = litmit
  let arr = this.pagination
  let chunk_arr = []
  let new_arr = []

  for (let i = 0; i < arr.length; i++) {
    chunk_arr.push(arr[i])
    if (i % litmit === litmit - 1 && i !== 0 || litmit === 1) {
      new_arr.push(chunk_arr)
      chunk_arr = []
    } else if (i === arr.length - 1) {
      new_arr.push(chunk_arr)
      chunk_arr = []
    }
  }

  this.chunk = new_arr
  return this
}

module.exports = paginate
