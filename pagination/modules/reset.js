const { Collection } = require("../../collection")

const reset = function () {
  this.setGetCursor(0)

  let cursor = this.setGetCursor()
  if (cursor >= this.chunk.length) {
    console.error('Page ' + cursor + ' not found')
    return undefined
  }

  let arr = this.chunk[cursor]
  if (!arr) {
    new Error(page + ' is not a page')
  }
  let col = new Collection()
  return col.make(arr)
}

module.exports = reset
