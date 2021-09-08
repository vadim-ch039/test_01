let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1]
let testData3 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
    skills: {
      php: 0,
      js: -1,
      madness: 10,
      rage: 10
    }
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
    skills: {
      php: 5,
      js: 7,
      madness: 3,
      rage: 2
    }
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
    skills: {
      php: 8,
      js: -2,
      madness: 1,
      rage: 4
    }
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
    skills: {
      php: 6,
      js: 6,
      madness: 5,
      rage: 2
    }
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
    skills: {
      php: 0,
      js: 10,
      madness: 10,
      rage: 1
    }
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
    skills: {
      php: 0,
      js: 0,
      madness: 0,
      rage: 10
    }
  },
]
let testData4 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
  },
  1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false,
  [[[[1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [{
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
  }]]]]]
]

/* 1 Array Find
 array_find(arr: array, search: string|regex): string|number[]|null
*/

let result_1 = array_find(testData, /^raf.*/i) // ["Rafshan"]
let result2_1 = array_find(testData, "Rafshan") // ["Rafshan"]
console.log('1 Array Find')
console.log(result_1, result2_1);

/**
 *
 * @param {Array} arr Array
 * @param {string|RegExp} search 
 * @returns string|number[]|null
 */

function array_find(arr, search) {
  if (!Array.isArray(arr)) {
    return new Error('Array has wrong format[array]')
  } else if (!(typeof search === 'string' || search.__proto__ === RegExp.prototype)) {
    return new Error('Search has wrong format[string|regex]')
  }

  let regex = new RegExp(search)
  let search_arr = arr.filter((val, index) => {
    let search_by_regex = regex.exec(val)
    return search_by_regex
  })
  if (search_arr.length > 0) {
    return search_arr
  }
  return null
}



/* 2 Array AVG
 array_avg(arr: array[, skipNaN: bool = false]): number
*/

let result_2 = array_avg(testData2) // ~265
let result2_2 = array_avg(testData) // ~420
let result3_2 = array_avg(testData, true) // ~191
console.log('2 Array AVG')
console.log(result_2, result2_2, result3_2);

function array_avg(arr, skipNaN) {
  if (!Array.isArray(arr)) {
    return new Error('Array has wrong format. [array]')
  }

  let avg = 0
  let count = 0
  skipNaN = skipNaN ? skipNaN : false

  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      const element = arr[key];
      if (!Number.isNaN(Number(element)) && typeof element !== 'boolean') {
        avg += Number(element)
        count++
      } else if (skipNaN) {
        count++
      }
    }
  }
  return avg / count
}



/* 3 Array Chank
 array_chunk(arr: array, count: number): any[]
*/
let result_3 = array_chunk(testData2, 2) // [[1, 2], [1990, 85], [24, 5], [7, 8.1]]
console.log('3 Array Chank')
console.log(result_3);

/**
 * Array Chank
 * @param {Array} arr
 * @param {number} count - => 0
 * @returns any
 */

function array_chunk(arr, count) {
  if (!Array.isArray(arr)) {
    return new Error('Array has wrong format[array]')
  } else if (!Number.isInteger(count) && Number.isInteger(count) >= 0) {
    return new Error('Count has wrong format[string|regex]')
  }

  let new_arr = []
  let temp_arr = []
  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      const element = arr[key];
      temp_arr.push(element)
      if ((parseInt(key) === arr.length - 1)
        || (parseInt(key) % count === count - 1)
        || (arr.length === 1)) {
        new_arr.push(temp_arr.map(val => val))
        temp_arr.length = 0
      }
    }
  }
  return new_arr
}



/* 4 Array Skip Until
 array_skip_until(arr: array, value: any): any[]
*/

let result_4 = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let result2_4 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
let result3_4 = array_skip_until(testData, "asd") // []
console.log('4 Array Skip Until')
console.log(result_4, result2_4, result3_4);

/**
 * Array Skip Until
 * @param {Array} arr 
 * @param {any} value 
 * @returns array
 */

function array_skip_until(arr, value) {
  if (!Array.isArray(arr)) {
    return new Error('Array has wrong format[array]')
  }

  let new_arr = []
  let skip = true

  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      const element = arr[key];
      if (element === value) {
        skip = false
      }
      if (!skip) {
        new_arr.push(element)
      }
    }
  }
  return new_arr
}



/* 5 Array Contains
 array_contains(arr: array, search: string|regex): bool
*/

let result_5 = array_contains(testData4, /^raf.*/i) // true
let result2_5 = array_contains(testData4, /^azaza.*/i) // false
console.log('5 Array Contains')
console.log(result_5, result2_5)

/**
 * Array Contains
 * @param {Array} arr
 * @param {string|RegExp} search
 * @returns boolean
 */

function array_contains(arr, search) {
  if (!Array.isArray(arr)) {
    return new Error('Array has wrong format[array]')
  } else if (!(typeof search === 'string' || search.__proto__ === RegExp.prototype)) {
    return new Error('Search has wrong format[string|regex]')
  }

  let bool = false
  let regex = new RegExp(search)

  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      const element = arr[key];
      if (regex.exec(element)) {
        bool = true
        break;
      }
    }
  }
  return bool
}



/* 6 Array Get
 array_get(arr: array, path:string): any
*/

let result_6 = array_get(testData4, '[5].name') // "Rafshan"
let result2_6 = array_get(testData4, '[17][0][0][0][11][0]') // {name: "Rafshan", email: "rafshan@example.com", age: 11}
let result3_6 = array_get(testData4, '[17][0][0][0][11][0][name]') // "Rafshan"
console.log('6 Array Get')
console.log(result_6, result2_6, result3_6)

/**
 * Array Get
 * @param {Array} arr
 * @param {string} path
 * @returns any|null
 */

function array_get(arr, path) {
  if (!Array.isArray(arr)) {
    return new Error('Array has wrong format[array]')
  } else if (!typeof path === 'string') {
    return new Error('Path has wrong format[string]')
  }

  let path_arr = parseStringPathToArray(path)
  let search_element = null

  if (path_arr.length > 0) {
    for (const key in path_arr) {
      if (Object.hasOwnProperty.call(path_arr, key)) {
        const element = path_arr[key];
        if (element !== '') {
          if (search_element) {
            search_element = search_element[element]
          } else {
            search_element = arr[element]
          }
        }
      }
    }
  }
  return search_element ? search_element : null
}



/* 7 Array Search
 array_search(arr: array, search: string|regex[, path:string = '']): [path: string, value: string|number][]
*/


let result_7 = array_search(testData4, /^raf.*/i) // [["[5].name", "Rafshan"], ["[13]", "Rafshan"], ["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]
let result2_7 = array_search(testData4, /^raf.*/i, '[17][0][0][0]') // [["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]
console.log('7 Array Search')
console.log(result_7, result2_7)

/**
 * Array Search
 * @param {Array} arr 
 * @param {string|RegExp} search 
 * @param {string} path 
 * @returns Array|null
 * @todo в некоторых объектах имеются помимо `name` еще и `email` свойства, я считаю что они должны тоже находится отдельно, поскольку имееют разные значения но совпадают по паттерну
 */

function array_search(arr, search, path) {
  if (!Array.isArray(arr)) {
    return new Error('Array has wrong format[array]')
  } else if (!(typeof search === 'string' || search.__proto__ === RegExp.prototype)) {
    return new Error('Search has wrong format[string|regex]')
  } else if (path && !typeof path === 'string') {
    return new Error('Path has wrong format[string]')
  }

  let path_arr = null
  if (path) {
    path_arr = parseStringPathToArray(path)
  }
  let regex = new RegExp(search)

  if (path_arr) {
    for (const key in path_arr) {
      if (Object.hasOwnProperty.call(path_arr, key)) {
        const element = path_arr[key];
        if (Object.hasOwnProperty.call(arr, element)) {
          arr = arr[element]
        } else {
          console.error(`Not path key: ${element}`)
        }
      }
    }
  }
  let new_arr = inObject(arr)
  function inObject(obj, old_path, parent_obj) {
    let inner_path = []
    let inner_find = []
    let stack_find = []
    let find = false

    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        let old_key = ''
        find = false

        if (old_path) {
          old_key += objKeyNameToString(parent_obj ? parent_obj : obj, old_path, true)
        }
        old_key += objKeyNameToString(obj, key)

        if (typeof element === 'object') {
          let in_obj = inObject(element, old_key, obj)
          if (in_obj) {
            stack_find.push(...in_obj)
          }
        } else {
          let serching = regex.exec(element)
          if (serching) {
            inner_path.push(path ? `${path}${old_key}` : old_key)
            inner_find.push(element)
            find = true
          }
        }
      }
      if (find) {
        stack_find.push([...inner_path, ...inner_find])
        inner_path.length = 0
        inner_find.length = 0
      }
    }
    return stack_find.length > 0 ? stack_find : null
  }
  return new_arr
}



/* 8 Array Combine
 array_combine(keys: array, values: array): Object
*/

let result_8 = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}
console.log('8 Array Combine')
console.log(result_8)

/**
 * Array Combine
 * @param {Array} keys 
 * @param {Array} values 
 * @returns Object
 */

function array_combine(keys, values) {
  if (!Array.isArray(keys)) {
    return new Error('Keys has wrong format[array]')
  } else if (!Array.isArray(values)) {
    return new Error('Values has wrong format[array]')
  }

  let new_obj = {}

  for (const key in keys) {
    if (Object.hasOwnProperty.call(keys, key)) {
      const element = keys[key];
      if (typeof element === 'string' || Number.isInteger(element)) {
        new_obj[element.toString()] = values[key]
      }
    }
  }
  return new_obj
}



/* 9 Array Normalize
 array_normalize(arr: array, schema: string|Object[, transform: bool = false]): any[]
*/

let result_9 = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result2_9 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result3_9 = array_normalize(testData4, { age: 'float' }) // []
let result4_9 = array_normalize(testData4, { age: 'float' }, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]
console.log('9 Array Normalize')
console.log(result_9,
  result2_9,
  result3_9,
  result4_9)

/**
 * Array Normalize
 * @param {Array} arr 
 * @param {string|Object} schema 
 * @param {boolean} [transform=false] 
 * @returns Array
 */

function array_normalize(arr, schema, transform = false) {
  if (!Array.isArray(arr)) {
    return new Error('Array has wrong format[array]')
  } else if (!(typeof schema === 'string' || schema.__proto__ === Object.prototype)) {
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
  return new_arr
}



/* 10 Array Pluck
 array_pluck(arr: array, path: string): any[]
*/

let result_10 = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
let result2_10 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]
console.log('10 Array Pluck')
console.log(result_10, result2_10)

/**
 * Array Pluck
 * @param {Array} arr 
 * @param {string} path 
 * @returns Array
 */

function array_pluck(arr, path) {
  if (!Array.isArray(arr)) {
    return new Error('Array has wrong format[array]')
  } else if (!(typeof path === 'string')) {
    return new Error('Path has wrong format[string]')
  }

  let path_arr = parseStringPathToArray(path)
  let new_arr = []

  for (const key in arr) {
    let temp_obj = null
    if (Object.hasOwnProperty.call(arr, key)) {
      const element = arr[key];

      for (const key_path in path_arr) {
        if (Object.hasOwnProperty.call(path_arr, key_path)) {
          const el_path = path_arr[key_path];
          if (Object.hasOwnProperty.call(element, el_path)
            || (temp_obj && Object.hasOwnProperty.call(temp_obj, el_path))) {

            if (temp_obj) {
              temp_obj = temp_obj[el_path]
            } else {
              temp_obj = element[el_path]
            }
          }
          if (parseInt(key_path) === path_arr.length - 1) {
            new_arr.push(temp_obj)
          }
        }
      }
    }
  }
  return new_arr
}



/* 11 Array Unique
 array_unique(arr: array): any[]
*/

let result_11 = array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
console.log('11 Array Unique')
console.log(result_11)

/**
 * Array Unique
 * @param {Array} arr 
 * @returns Array
 */

function array_unique(arr) {
  if (!Array.isArray(arr)) {
    return new Error('Array has wrong format[array]')
  }

  let new_arr = []

  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      const element = arr[key];
      if (new_arr.indexOf(element) === -1) {
        new_arr.push(element)
      }
    }
  }

  return new_arr
}



/* 12 Array Fill
 array_fill(lenght: number, value: any): any[]
*/

let result_12 = array_fill(5, 'string') // ['string', 'string', 'string', 'string', 'string']
console.log('Array Fill')
console.log(result_12)

/**
 * Array Fill
 * @param {number} length 
 * @param {any} value 
 * @returns Array
 */

function array_fill(length, value) {
  length = Number(length)
  if (Number.isNaN(length)) {
    return new Error('Length has wrong format[number]')
  } else if (typeof value === undefined) {
    return new Error('Value has required[any]')
  }

  let new_arr = []

  for (let index = 0; index < length; index++) {
    new_arr.push(value)
  }

  return new_arr
}



/* 13 Collection
*/

console.log('13 Collection')
let { Collection } = require('./collection')
Collection = new Collection()
let collection_13 = Collection.make(testData)
console.log(collection_13.filter((el) => { return el > 2 }).values()) // [ 1990, 85, 24 ]
console.log(collection_13.map(el => el).values()) // [ 1990, 85, 24 ]
console.log(collection_13.reduce((a, b) => a + b)) // 2099
console.log(collection_13.every((element) => element >= 1)) // true
console.log(collection_13.indexOf(2)) // -1
console.log(collection_13.toJSON()) // [1990,85,24]
console.log(collection_13.toQueryString()) // 19908524
console.log(collection_13.isEmpty()) // false

let numbers = Collection.make([1, 2, 3, 4]);
console.log(numbers.map(item => item * 2).filter(item => item > 2).toJSON()) // [4,6,8]



/* 14 Collection
*/
console.log('14 Collection')
let collection_14 = Collection.make(testData)
console.log(collection_14.find(/^raf.*/i)) // Rafshan
console.log(collection_14.avg(true)) // ~300
console.log(collection_14.chunk(4).toJSON()) // [[1,2,1990,85],[24,"Vasya","colya@example.com","Rafshan"],["ashan@example.com",true,false]]
// не знаю как точно должна реализовываться эта функция. сделал как "пропустить до"
console.log(Collection.make(testData).skipUntil('Vasya').toJSON()) // ["Vasya","colya@example.com","Rafshan","ashan@example.com",true,false]
console.log(Collection.make(testData).contains('Vasya')) // true
console.log(Collection.make(testData).get('2')) // 1990
console.log(Collection.make(testData3).normalize({ age: 'float' }, true).toJSON()) // [{"age":20},{"age":34},{"age":46},{"age":16},{"age":99},{"age":11}]
console.log(Collection.make(testData3).pluck('name').toJSON()) // ["Vasya","Dima","Colya","Misha","Ashan","Rafshan"]
console.log(Collection.make([...testData, ...testData2]).unique().toJSON()) // [1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,5,7,8.1]
console.log(Collection.fill(3, 'Vasya').toJSON()) // [["Vasya"],["Vasya"],["Vasya"]]



/* 15 Collection
*/
console.log('15 Collection')
let collection_15 = Collection.make(testData)
console.log(collection_15.sort(function (a, b) {
  return a - b;
}).toJSON()) // [false,1,true,2,24,85,1990,"Vasya","colya@example.com","Rafshan","ashan@example.com"]
console.log(collection_15.sortDesc().toJSON()) // [1990,85,24,2,1,true,false,"Vasya","colya@example.com","Rafshan","ashan@example.com"]
console.log(Collection.make(testData3).sortBy('name').toJSON()) // [{name: Ashan...}, {name; Colya...}...]
console.log(Collection.make(testData3).sortByDesc('name').toJSON()) // [{name: Vasya...}, {name; Dima...}...]



/* 16-17 Pagination
*/
console.log('16-17 Pagination')
let temp = require('./collection')
temp = new temp.Collection()
const { Pagination } = require('./pagination')
let pagination_16 = Pagination.make(temp.make([1, 2, 3, 4, 5, 6]), 5);
console.log(pagination_16.page(2).values()) // [6]
console.log(pagination_16.paginate(1).page(2).values()) // [2]
console.log(Pagination.make(temp.make([1, 2, 3, 4, 5, 6]), 5).page(2).values()) // [6]
console.log(Pagination.count()) // [6]



/* 18 Pagination
*/

console.log('18 Pagination')
let pagination_18 = Pagination.make(temp.make([1, 2, 3, 4, 5, 6, 7, 8])).paginate(2);
console.log(pagination_18.current().values()) // [ 1, 2 ] (paginate = 2)
console.log(pagination_18.next().values()) // [ 3, 4 ]
console.log(pagination_18.next().values()) // [ 5, 6 ]
console.log(pagination_18.next().values()) // [ 7, 8 ]
console.log(pagination_18.current().values()) // [ 7, 8 ]
pagination_18.cursor = 2
console.log(pagination_18.cursor) // 3
console.log(pagination_18.reset().values()) // [ 1, 2 ]
console.log(pagination_18.current().values()) // [ 1, 2 ]



/* 19 Array Interval

*/

let arr_19 = [1, 2, 3, 4, 5, 6, 7, 8, "Vasya", "|", "123", 9, 10, 11, 12, 13, 14, 15]
console.log('19 Array Interval')
array_interval(arr_19, 4, 2000)

function array_interval(arr, count, time) {
  let chunk = Math.ceil(arr.length / count)
  let start_slice = 0
  let end_slice = count
  let i = 0

  setTimeout(() => {
    start()
  }, time)
  function start() {
    console.log(arr.slice(start_slice, end_slice))
    start_slice += count
    end_slice += count
    i++
    if (i < chunk) {
      setTimeout(start, time)
    }
  }
}



/* 21 Group Data
  небыло четких указаний как сортировать в группе, поэтому сортирую по уровню скиллу, если он больше 0, в подгруппы
*/

console.log('21 Group Data')
group_data(testData3)

function group_data(arr) {
  let group = {}
  let all_skills = []

  // смотрю все существующие скиллы, с тем нюансом что в каждом элементе массива есть инфа о всех
  for (const el_key in arr[0].skills) {
    if (Object.hasOwnProperty.call(arr[0].skills, el_key)) {
      group[el_key] = {}
    }
  }

  for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
      const element = arr[key];
      let skills = []
      for (const key_el in element.skills) {
        if (Object.hasOwnProperty.call(element.skills, key_el)) {
          const el_skill = element.skills[key_el];
          skills.push({ [key_el]: el_skill })
        }
      }
      all_skills.push({ name: element.name, skills })
    }
  }

  for (const key in all_skills) {
    if (Object.hasOwnProperty.call(all_skills, key)) {
      const element = all_skills[key];
      for (const key_el in element.skills) {
        if (Object.hasOwnProperty.call(element.skills, key_el)) {
          const skill_el = element.skills[key_el];
          for (const skill_el_key in skill_el) {
            const skill_el_key_value = skill_el[skill_el_key]
            if (skill_el_key_value > 0 && group[skill_el_key][skill_el_key_value]) {
              group[skill_el_key][skill_el_key_value].push(element.name)
            } else if (skill_el_key_value > 0) {
              group[skill_el_key][skill_el_key_value] = [element.name]
            }
          }
        }
      }
    }
  }

  for (const key in group) {
    if (Object.hasOwnProperty.call(group, key)) {
      const element = group[key];
      console.log(`\n----- ${key.toUpperCase()} -----`)
      for (const el_key in element) {
        if (Object.hasOwnProperty.call(element, el_key)) {
          const el_group = element[el_key];
          console.log(`--- ${el_key.toUpperCase()} ---`)
          for (const el_group_key in el_group) {
            console.log(el_group[el_group_key])
          }
        }
      }
    }
  }
}



/* 22 To Pagination
  toPagination(data: any, limit: number): Pagination
*/



// -------- helpers methods

/**
 * Parsing string object name to array
 * @param {string} path 
 * @returns Array
 */

function parseStringPathToArray(path) {
  let path_arr = []
  let start = false
  let start_dot = false
  let temp_name = ''

  for (const key in path) {
    if (Object.hasOwnProperty.call(path, key)) {
      const element = path[key];
      if (element === '[') {
        start = true
        if (start_dot) {
          start_dot = false
          path_arr.push(temp_name)
          temp_name = ''
        }
      } else if (element === ']') {
        start = false
        path_arr.push(temp_name)
        temp_name = ''
      } else if (element === '.' && !start) {
        if (temp_name.length > 0) {
          path_arr.push(temp_name)
          temp_name = ''
        }
        if (start_dot) {
          path_arr.push(temp_name)
          temp_name = ''
        }
        start_dot = true
      } else {
        temp_name += element
      }
      if (path.length - 1 === parseInt(key)) {
        path_arr.push(temp_name)
      }
    }
  }
  return path_arr
}

/**
 * returns the key of an array or object as a string or null (if not object)
 * @param {object} obj 
 * @param {string|number} key 
 * @param {boolean} [not_symbol=false] - default false
 * @returns string|null
 */

function objKeyNameToString(obj, key, not_symbol = false) {
  if (not_symbol && typeof obj === 'object') {
    return `${key}`
  }
  if (typeof obj === 'object' && Array.isArray(obj)) {
    return `[${key}]`
  } else if (typeof obj === 'object') {
    return `.${key}`
  } else {
    return null
  }
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
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
