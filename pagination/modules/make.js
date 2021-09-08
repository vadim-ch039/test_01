const { Collection } = require("../../collection");

const make = (function () {
  const private_store = {}
  let uid = 0

  function _make(arr, litmit) {
    if (!(arr && arr instanceof Collection)) {
      throw new TypeError(arr + ' is not a Collection');
    }
    if (Number.isNaN(Number(litmit))) {
      litmit = 1
      console.info('litmit' + ' is 1')
    }
    this.litmit = litmit
    arr = arr.collection
    this.pagination = arr
    let chunk_arr = []
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
      chunk_arr.push(arr[i])
      if (i % litmit === litmit - 1 && i !== 0) {
        new_arr.push(chunk_arr)
        chunk_arr = []
      } else if (i === arr.length - 1) {
        new_arr.push(chunk_arr)
        chunk_arr = []
      }
    }
    this.chunk = new_arr
    private_store[this._id = uid++] = {}

    this.setGetCursor = (value) => {
      if (!Number.isNaN(Number(value))) {
        private_store[this._id].cursor = value
      } else {
        return private_store[this._id].cursor
      }
    }
    setGetCursor(0)

    Object.defineProperty(this, 'cursor', {
      get: this.setGetCursor,
      set: function() {},
      configurable: true
    })

    return this
  }
  return _make
}())

module.exports = make
