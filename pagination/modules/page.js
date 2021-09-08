const { Collection } = require("../../collection")

const page = function (page) {
  if (Number.isNaN(Number(page))) {
    return new Error(page + ' is not a number')
  }
  let arr = this.chunk[page - 1]
  if (!arr) {
    new Error(page + ' is not a page')
  }
  let col = new Collection()
  return col.make(arr)
}

module.exports = page