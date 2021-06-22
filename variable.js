// 1. Use strict
// add in ES5
// use this for Valian JavaScript.
'use strict';


// 2. Variable (변수) rw (read/write)
// let (added in ES6)
let globalName='global name'
{
    let name = 'ellie'  
    console.log(name)
    name = 'hello'
    console.log(name)
}
console.log(name)
console.log(globalName)

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4
    var age
}
console.log(age)

// 3. Constant  r(read only)
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const datsInWeek = 7;
const maxNumber = 5;

// 4. Varialbe types

// primitive, single item: number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number 

console.log(`value : ${count}, type : ${typeof count}`)
console.log(`value : ${size}, type : ${typeof size}`)

// number - speicla numberic values : infinity, -infinity, NaN (not a number)
const infinity = 1 / 0
const negativeInfinity = -1 / 0
const nAn = 'not a number' / 2
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

// string
const char = 'c';
const brendan = 'brendan'
const greeting = 'hello ' + brendan
console.log(`value : ${greeting}, type : ${typeof greeting}`)
const helloBob = `hi ${brendan}!` // template literals (string)
console.log(`value : ${helloBob}, type : ${typeof helloBob}`)

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true
const test = 3 < 1 // false
console.log(`value : ${canRead}, type : ${typeof canRead}`)
console.log(`value : ${test}, type : ${typeof test}`)

// null
let nothing = null
console.log(`value : ${nothing}, type : ${typeof nothing}`)

// undefined
let x  // or let x = undefined 
console.log(`value : ${x}, type : ${typeof x}`)

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1===symbol2) // false
const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id')
console.log(gSymbol1===gSymbol2) // true
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`)

// object, real-life object, data structure
const ellie = {name : 'ellie', age : 20}
console.log(`value : ${ellie}, type : ${typeof ellie}`)
ellie.age = 21 // ellie는 const 라 변경 불가능하지만 ellie.age의 변수는 변경 가능  
console.log(`value : ${ellie.age}, type : ${typeof ellie.age}`)

// 5. Dynamic typing : dynamically typed language
let text = 'hello'
console.log(text.charAt(0)) // h
console.log(`value : ${text}, type : ${typeof text}`)
text = 1
console.log(`value : ${text}, type : ${typeof text}`)
text = '7' + 5
console.log(`value : ${text}, type : ${typeof text}`)
text = '8' / '2'
console.log(`value : ${text}, type : ${typeof text}`)
console.log(text.charAt(0))
