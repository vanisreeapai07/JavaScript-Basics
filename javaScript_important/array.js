var a = ['apple', 'orange', 'grape'] //with literal

var v = new Array() // by creating an instance of an array

v[0] = 'tomato'
v[1] = 'pea'
v[2] = 'cabbage'

// console.log(v)

// OPERATIONS ON ARRAY

// 1. REDUCE OOPERATION


var array = [1, 2, 3, 4]

var reducer = (previousValue, currentValue) => previousValue + currentValue

var sum = array.reduce(reducer)

// console.log(sum)



// 2. SLICE OPERATION


var fruits = ['apple', 'orange', 'lemon', 'mnago', 'banana']

var citus = fruits.slice(0, 4)

// console.log(citus)


// 3. INCLUDE OPERATION

var check = fruits.includes('apple')

// console.log(check)


// 4. FIND OPERATION

var m = [10, 2, 3, 4, 5]

var findItem = m.find(Element => Element < 10)

// console.log(findItem)

// 5. INDEX OF OPERATION

var findIndex = m.indexOf(4)

// console.log(findIndex)

// 6. PUSH OPERATION

var g = [1, 2, 3, 4, 5]

g.push(6)


// 7. POP OPERATION

g.pop()
// console.log(g)

// 8. LENGTH OPERATION

var findLength = g.length
// console.log(findLength)

// 9. FROM  OPERATION


var veg = 'tomato'
var ary = Array.from(veg)
// console.log(ary)

// 10. CONCAT OPERATION

var h = ['a', 'b', 'c', 'd']
var j = ['m', 'n', 'o', 'p', 'q']

var x = h.concat(j)
console.log(x)



