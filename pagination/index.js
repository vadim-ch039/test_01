const Pagination = (function () {
  this.make = require('./modules/make')
  this.page = require('./modules/page')
  this.paginate = require('./modules/paginate')
  this.count = require('./modules/count')
  this.current = require('./modules/current')
  this.next = require('./modules/next')
  this.prev = require('./modules/prev')
  this.first = require('./modules/first')
  this.last = require('./modules/last')
  this.reset = require('./modules/reset')
  return this
})()


module.exports = {
  Pagination
}
