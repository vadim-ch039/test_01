const { Collection } = require("../../collection")

const next = function () {
  let cursor = this.setGetCursor()
  cursor += 1
  if (cursor >= this.chunk.length) {
    console.error('Page ' + cursor + ' not found')
    return undefined
  }

  let arr = this.chunk[cursor]
  this.setGetCursor(cursor)
  if (!arr) {
    new Error(page + ' is not a page')
  }
  let col = new Collection()
  return col.make(arr)
}

module.exports = next
