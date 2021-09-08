const { Collection } = require("../../collection")

const current = function () {
  let arr = this.chunk[this.setGetCursor()]
  if (!arr) {
    new Error(page + ' is not a page')
  }
  let col = new Collection()
  return col.make(arr)
}

module.exports = current
