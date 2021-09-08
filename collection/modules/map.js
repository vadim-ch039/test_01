const map = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError(' this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }

  let new_arr = []
  let this_arg;
  if (arguments.length > 2) {
    this_arg = thisArg;
  }

  for (let i = 0; i < arr.length; i = i + 1) {
    let new_val;
    new_val = callback.call(thisArg, arr[i], i, arr);
    new_arr[i] = new_val
  }
  this.collection = new_arr
  return this
};

module.exports = map