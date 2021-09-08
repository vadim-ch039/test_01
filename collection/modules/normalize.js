const normalize = function (schema, transform = false) {
  let arr = this.collection
  if (!Array.isArray(arr)) {
    throw new TypeError(arr + ' is not a array');
  }
  if (!(typeof schema === 'string' || schema.__proto__ === Object.prototype)) {
    return new Error('Schema has wrong format[string|object]')
  } else if (transform && !(typeof transform === 'boolean')) {
    return new Error('Transform has wrong format[bool]')
  }

  const schema_transform = {
    'string': (el) => {
      if (typeof el === 'string' || typeof el === 'number')
        return String(el)
      return el
    },
    'number': (el) => {
      if (!Number.isNaN(Number(el)))
        return Number(el)
      return el
    },
    'int': (el) => {
      if (Number.isInteger(el))
        return parseInt(el)
      return el
    },
    'float': (el) => {
      if (isFloat(el))
        return parseFloat(el)
      return el
    },
    'bool': (el) => {
      return !!el
    },
    'function': (el) => {
      return new Function(el)
    },
    'array': (el) => {
      return new Array(el)
    },
    'Object': (el) => {
      return Object.assign({}, el)
    }
  }
  let new_arr = []
  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      let element = arr[key];
      if (typeof schema === 'object') {
        for (const schema_key in schema) {
          if (Object.hasOwnProperty.call(schema, schema_key) && Object.hasOwnProperty.call(element, schema_key)) {
            const schema_element = schema[schema_key];
            if (transform && schema_transform[schema_element]) {
              element[schema_key] = schema_transform[schema_element](element[schema_key])
            }
            if (checkTypeof(element[schema_key]) === schema_element) {
              new_arr.push({ [schema_key]: element[schema_key] })
            } else if (schema_element === 'float' && transform) {
              if (checkTypeof(element[schema_key]) === 'int') {
                new_arr.push({ [schema_key]: element[schema_key] })
              }
            }
          }
        }
      } else {
        if (transform && schema_transform[schema]) {
          element = schema_transform[schema](element)
        }
        if (checkTypeof(element) === schema) {
          new_arr.push(element)
        } else if (element === 'float' && transform) {
          if (checkTypeof(element) === 'int') {
            new_arr.push(element)
          }
        }
      }
    }
  }
  this.collection = new_arr
  return this
}

function checkTypeof(el) {
  if (typeof el === 'number') {
    if (isFloat(el)) {
      return 'float'
    } else if (Number.isInteger(el)) {
      return 'int'
    } else {
      return 'number'
    }
  } else if (typeof el === 'string') {
    return 'string'
  } else if (typeof el === 'object') {
    return Array.isArray(el) ? 'array' : 'Object'
  } else if (typeof el === 'function') {
    return 'function'
  } else if (typeof el === 'boolean') {
    return 'bool'
  }
  return null
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}


module.exports = normalize