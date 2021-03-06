// Array 

// 1. Declatation
const arr1 = new Array()
const arr2 = [1,2] 

// 2. Index position
const fruits = ['π','π']
console.log(fruits)
console.log(fruits.length)
console.log(fruits[0])  // π
console.log(fruits[1])  // π
console.log(fruits[2])  // undefined
console.log(fruits[fruits.length-1]) // λ°°μ΄μ λ§μ§λ§μ μ°Ύμ λ (π)

console.clear()
// 3. Looping over an array
// print all fruits
// a. for
console.log('μΌλ° for λ¬Έ')
for (let i=0; i<fruits.length;i++){
    console.log(fruits[i])
}
// b. for..of
console.log('for..of λ¬Έ')
for(fruit of fruits){
    console.log(fruit)
}
// c. forEach
console.log('forEach λ¬Έ')
fruits.forEach((fruit,index,array)=>{
    console.log(fruit)
    console.log(index)
    console.log(array) // λ³΄ν΅ arrayλ μ μ¬μ©λμ§ μμ
})

console.clear()
// 4. Addtion, deletion, copy
// push : add an item to the end 
fruits.push('π','π')
console.log(fruits) // = > ["π", "π", "π", "π"]

// pop : remove an item from the end 
fruits.pop() // ==> λ§μ§λ§ μμ΄νμ΄ μ κ±°λ¨
fruits.pop()
console.log(fruits) // ["π", "π"]

// unshift : add an item to the benigging
fruits.unshift('π','π')
console.log(fruits) // ["π", "π", "π", "π"]

// shift : remove an item from the benigging
fruits.shift()  // ==> λ§¨μ μμ΄νμ΄ μ κ±°λ¨
fruits.shift()
console.log(fruits) // ["π", "π"]

// note!! shift, unshift are slower than pop, push
// popμ΄λ pushλ λ€μμ λΆν° κ°μ λ£κ³  λΉΌλλ°, λ°°μ΄μ λ§¨ μλ ν­μ λΉμ΄μκΈ° λλ¬Έμ
// κ°μ λ£λλ° λΆλ΄μ΄ μμ§λ§
// shiftμ unshiftλ μμμ κ°μ λ£κ³  λΉΌλλ°, λ°°μ΄μ μμ κ°μ΄ μλ€λ©΄ κ·Έ κ°λ€μ΄ νμΉΈμ©
// λ€μ indexλ‘ λκ²¨μ€ λ€μ λ£κ³ μΆμ κ°μ λ£μ΄μ€λ€. λν κ°μ λΉΌμ€λλ λ§¨μμ μ§μ°κ³  
// λ€μ indexλ€μ΄ μμΌλ‘ λ€μ μ΄λμ μμΌμ£ΌκΈ° λλ¬Έμ λΆλ΄μ΄ λλ€.
// λ°°μ΄μ κΈΈμ΄κ° κΈΈλ©΄ κΈΈμλ‘ λ ν°λΆλ΄μ΄ λλ€.

// remove an item by index position 
// splice : remove an item by index position (νΉμ index μ­μ )
fruits.push('π','π','π')
console.log(fruits) // ["π", "π", "π", "π", "π"]
fruits.splice(1,1)  // μμνλ indexλ²νΈ, λͺκ°λ₯Ό μ§μΈκ²μΈμ§(μ΅μ)
console.log(fruits) // λͺκ°λ₯Ό μ§μΈκ²μΈμ§ λͺμνμ§ μμΌλ©΄ μμλ²νΈ μ΄νλ λ€ μ§μμ§λ€.
                    // // ["π", "π", "π", "π"]
// fruits.splice(1) 
// console.log(fruits) // ["π",]
fruits.splice(1,1,'π','π') // 1λ²μ§Έ indexμμ λΆν° 1κ°λ§ μ§μ°κ³  'π','π'λ₯Ό μΆκ°
console.log(fruits) // ["π", "π", "π", "π", "π"]

// combine two arrays (κ²°ν©)
const fruits2=['π','π₯']
const newFruits = fruits.concat(fruits2) // κΈ°μ‘΄μ fruits μ μλ‘μ΄ fruits2 κ° ν©μ³μ§ μλ‘μ΄ λ°°μ΄
console.log(newFruits)  // ["π", "π", "π", "π", "π", "π", "π₯"]

// 5. Searching
// find the index

// indexOf
console.clear()     // ["π", "π", "π", "π", "π"]
console.log(fruits) // μ¬κ³Όκ° λͺλ²μ§Έ indexμ μλμ§ μκ³ μΆλ€λ©΄? ==> indexOf μ¬μ©
console.log(fruits.indexOf('π'))  // 0
console.log(fruits.indexOf('π'))  // 2
console.log(fruits.indexOf('π'))  // -1 λ§μ½ λ°°μ΄μ ν΄λΉκ°μ΄ μμΌλ©΄ -1μ΄ λ°νλ¨

// includes
// λ°°μ΄μ μλ°μ΄ μλμ§ μλμ§ μκ³ μΆλ€λ©΄? == > includesμ¬μ©
console.log(fruits.includes('π')) // true 
console.log(fruits.includes('π')) // false

// lastIndexOf
fruits.push('π') // ["π", "π", "π", "π", "π", "π"]
console.log(fruits)
console.log(fruits.indexOf('π')) // 0 indexOfλ μ μΌ μ²«λ²μ§Έλ‘ ν΄λΉνλ κ°μ λ§λλ©΄ 
                                   //κ·Έ κ°μ΄ λ€μ΄μλ indexλ₯Ό returnνκ² λλ€.
console.log(fruits.lastIndexOf('π')) // 5 lastIndexOfλ λ§μ§λ§μ μλ κ°μ indexλ₯Ό μΆλ ₯



















