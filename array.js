// Array 

// 1. Declatation
const arr1 = new Array()
const arr2 = [1,2] 

// 2. Index position
const fruits = ['🍎','🍌']
console.log(fruits)
console.log(fruits.length)
console.log(fruits[0])  // 🍎
console.log(fruits[1])  // 🍌
console.log(fruits[2])  // undefined
console.log(fruits[fruits.length-1]) // 배열의 마지막을 찾을 때 (🍌)

console.clear()
// 3. Looping over an array
// print all fruits
// a. for
console.log('일반 for 문')
for (let i=0; i<fruits.length;i++){
    console.log(fruits[i])
}
// b. for..of
console.log('for..of 문')
for(fruit of fruits){
    console.log(fruit)
}
// c. forEach
console.log('forEach 문')
fruits.forEach((fruit,index,array)=>{
    console.log(fruit)
    console.log(index)
    console.log(array) // 보통 array는 잘 사용되지 않음
})

console.clear()
// 4. Addtion, deletion, copy
// push : add an item to the end 
fruits.push('🍓','🍑')
console.log(fruits) // = > ["🍎", "🍌", "🍓", "🍑"]

// pop : remove an item from the end 
fruits.pop() // ==> 마지막 아이템이 제거됨
fruits.pop()
console.log(fruits) // ["🍎", "🍌"]

// unshift : add an item to the benigging
fruits.unshift('🍓','🍋')
console.log(fruits) // ["🍓", "🍋", "🍎", "🍌"]

// shift : remove an item from the benigging
fruits.shift()  // ==> 맨앞 아이템이 제거됨
fruits.shift()
console.log(fruits) // ["🍎", "🍌"]

// note!! shift, unshift are slower than pop, push
// pop이나 push는 뒤에서 부터 값을 넣고 빼는데, 배열의 맨 위는 항상 비어있기 때문에
// 값을 넣는데 부담이 없지만
// shift와 unshift는 앞에서 값을 넣고 빼는데, 배열의 앞에 값이 있다면 그 값들이 한칸씩
// 다음 index로 넘겨준 다음 넣고싶은 값을 넣어준다. 또한 값을 빼줄때는 맨앞을 지우고 
// 다음 index들이 앞으로 다시 이동을 시켜주기 때문에 부담이 된다.
// 배열의 길이가 길면 길수록 더 큰부담이 된다.

// remove an item by index position 
// splice : remove an item by index position (특정index 삭제)
fruits.push('🍓','🍑','🍋')
console.log(fruits) // ["🍎", "🍌", "🍓", "🍑", "🍋"]
fruits.splice(1,1)  // 시작하는 index번호, 몇개를 지울것인지(옵션)
console.log(fruits) // 몇개를 지울것인지 명시하지 않으면 시작번호 이후는 다 지워진다.
                    // // ["🍎", "🍓", "🍑", "🍋"]
// fruits.splice(1) 
// console.log(fruits) // ["🍎",]
fruits.splice(1,1,'🍏','🍉') // 1번째 index에서 부터 1개만 지우고 '🍏','🍉'를 추가
console.log(fruits) // ["🍎", "🍏", "🍉", "🍑", "🍋"]

// combine two arrays (결합)
const fruits2=['🍐','🥑']
const newFruits = fruits.concat(fruits2) // 기존의 fruits 와 새로운 fruits2 가 합쳐진 새로운 배열
console.log(newFruits)  // ["🍎", "🍏", "🍉", "🍑", "🍋", "🍐", "🥑"]

// 5. Searching
// find the index

// indexOf
console.clear()     // ["🍎", "🍏", "🍉", "🍑", "🍋"]
console.log(fruits) // 사과가 몇번째 index에 있는지 알고싶다면? ==> indexOf 사용
console.log(fruits.indexOf('🍎'))  // 0
console.log(fruits.indexOf('🍉'))  // 2
console.log(fruits.indexOf('🍕'))  // -1 만약 배열에 해당값이 없으면 -1이 반환됨

// includes
// 배열에 수박이 있는지 없는지 알고싶다면? == > includes사용
console.log(fruits.includes('🍉')) // true 
console.log(fruits.includes('🍕')) // false

// lastIndexOf
fruits.push('🍎') // ["🍎", "🍏", "🍉", "🍑", "🍋", "🍎"]
console.log(fruits)
console.log(fruits.indexOf('🍎')) // 0 indexOf는 제일 첫번째로 해당하는 값을 만나면 
                                   //그 값이 들어있는 index를 return하게 된다.
console.log(fruits.lastIndexOf('🍎')) // 5 lastIndexOf는 마지막에 있는 값의 index를 출력



















