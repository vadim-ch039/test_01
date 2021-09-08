const avg = function (skipNaN) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }

  let avg_sum = 0
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (skipNaN) {
      if (!Number.isNaN(Number(arr[i]))) {
        avg_sum += Number(arr[i])
        count++
      }
    } else {
      avg_sum += Number(arr[i])
      count++
    }
  }
  return avg_sum / count
}

module.exports = avg
