const Collection = function () {
  this.make = require('./modules/make')
  this.map = require('./modules/map')
  this.filter = require('./modules/filter')
  this.reduce = require('./modules/reduce')
  this.every = require('./modules/every')
  this.indexOf = require('./modules/indexOf')
  this.toJSON = require('./modules/toJSON')
  this.toQueryString = require('./modules/toQueryString')
  this.isEmpty = require('./modules/isEmpty')
  this.find = require('./modules/find')
  this.avg = require('./modules/avg')
  this.chunk = require('./modules/chunk')
  this.skipUntil = require('./modules/skipUntil')
  this.contains = require('./modules/contains')
  this.get = require('./modules/get')
  this.normalize = require('./modules/normalize')
  this.pluck = require('./modules/pluck')
  this.unique = require('./modules/unique')
  this.fill = require('./modules/fill')
  this.sort = require('./modules/sort')
  this.sortDesc = require('./modules/sortDesc')
  this.sortBy = require('./modules/sortBy')
  this.sortByDesc = require('./modules/sortByDesc')
  this.values = require('./modules/values')
  return this
}

module.exports = {
  Collection
}
