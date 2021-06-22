//  Objects
//  one of the JavaScript's data types.
//  a collection of related data and/or functionality.
//  Nearly all object in JavaScript are instances of Object
//  object = { key : value }; 오브젝트는 key 와 value 의 집합체이다.
//  즉 object는 우리가 접근 할 수 있는 변수(property)와 property가 가지고 있는 값으로 나누어져 있다.


// 1. Literals and properties
 // object 선언 방법
const obj1 = {} // 'object literal' syntax
const obj2 = new Object()   // 'object constructor' syntax

 const name = 'ellie' // primitive 타입은 변수 하나당 값을 하나만 담을 수 있다.
 const age = 4
 function print1(name,age){
    console.log(name)
    console.log(age)
 }
 print1(name,age)

 const ellie ={ // object 를 이용하면 데이터를 관리하기 편하다.
     name : 'ellie',    // name 과 age 가 key
     age : 4            // 'ellie' 와 4 가 value
 }

 function print2(person){
    console.log(person.name)
    console.log(person.age)
 }
 print2(ellie)

// js는 동적으로 타입이 runtime때 결정이된다 
ellie.hasJob = true // 그래서 이런식으로 뒤늦게 하나의 property를 추가 할 수 있다.
console.log(ellie.hasJob) // 좋은 방법은 아니다. 유지 보수 할 때 어려움
delete ellie.hasJob // 삭제도 가능하다.
console.log(ellie.hasJob)

// 2. Computed properties (계산된 properties)
// key should be always string 
console.log(ellie.name) // object의 데이터에 접근 할 때 . 을 이용하여 접근함
console.log(ellie['name'])  // object의 변수의 이름을 String 형태로 접근 가능 배열에서 데이터를 받아오는것과 비슷함 
                            // 여기서 key는 항상 string 타입으로 해야함 
ellie['hasJob'] = true      // 위에서 ellie.hasJob 선언과 같은 결과 
console.log(ellie.hasJob)

// 어떤 상황에서 .으로 접근과 [] 로 접근 ? 
// . 을 사용할 때는 코딩하는 그 순간 key에 해당하는 값을 받아 오고 싶을 때 
// [] 는 정확하게 어떤 key가 필요한지 몰라서  runtime 에서 결정 될 때 

function printValue1(obj,key){
    console.log(obj.key) // 여기서는 object의 key라는 property가 들어있는지 확인 하는것이고
}
printValue1(ellie,'name')  

function printValue2(obj,key){
    console.log(obj[key]) // 따라서 Computed properties 로 사용해야 원하는 값이 출력된다.
}
printValue2(ellie,'name')
printValue2(ellie,'age')    // 동적으로 key에 관련된 value를 받아와야 할 때 유용하게 사용
                  
// 3. Property value shorthand
const person1 = {name : 'bob', age:2}
const person2 = {name : 'steve', age:3}
const person3 = {name : 'dave', age:4}
const person4 = makePerson('elile', 30)
const person5 = makePerson2('elile', 30)
const person6 = new Person('elile', 30)
console.log(person4)
console.log(person5)
console.log(person6)
// 함수를 이용하여 object 를 생성 가능하다.
function makePerson(name, age){
    return {
        name : name,
        age : age
    }
}
// js 에서는 Property value shorthand 기능이 있어서 key와 value의 이름이 동일하다면 생략가능
function makePerson2(name, age){
    return {
        name,
        age
    }
}
// 4. Constructor Function
// 다른 계산을 하지 않고 순수하게 object만을 생성하는 함수들은 대문자로 시작 하도록 함수를 만들고,
// class 처럼 작성한다.
function Person(name, age){
    // this = {}    this로 {} 를 대체하고 
    this.name = name
    this.age = age
    // return this  그 this를 return 한다. 
}

// 5. in operator : property existence check (key in obj)
// 해당하는 오브젝트 안에 key가 있는지 없는지 확인하는 기능
console.log('name' in ellie)
console.log('age' in ellie)
console.log('random' in ellie)
console.log(ellie.random)

// 6. for..in vs for..of
// for (key in obj)
console.clear()
for (key in ellie){   // ellie가 가지고 있는 key들이 블럭을 돌 때마다 key라는 지역변수에 할당이 된다. 
    console.log(key)  // console에 출력하게 되면 ellie안의 모든 key들이 출력된다.
}

// for (value of iterable) // for..of 는 object를 사용하는것이 아니라 배열과 같은 배열 리스트에 사용
const array = [1,2,4,5]
console.log('일반 for 문')
for(let i =0; i<array.length; i++){
    console.log(array[i])
}
console.log('for...of 문')
for(value of array){    // array의 모든 값들이 value에 할당되면서 블럭안에서 순차적으로 출력 한다.
    console.log(value)
}
console.clear()
// 7. cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name:'ellie',age:'20'}
const user2 = user
user2.name = 'coder'    // user2가 user의 ref를 참고하고 있기 때문에 user2.name의 값을 coder로 바꾸면
console.log(user)       // user.name 의 값도 coder로 보여지게 된다. 

// old way  (새로운 object에 직접 값을 넣어주기 ==> for..in , Computed properties 사용) 
const user3 ={}
for (key in user){
    user3[key] = user[key]
}
console.log(user3)

// new way
const user4 = {}
Object.assign(user4,user)  
console.log(user4)

const user5 = Object.assign({},user)  
console.log(user5)

// another example
const fruit1 = {color:'red'}
const fruit2 = {color:'blue',size:'big'}
const mixed = Object.assign({},fruit1,fruit2)   
console.log(mixed.color)
console.log(mixed.size)
// 뒤에 나오는 오브젝트 일수록 앞에 동일한 property가 있다면 값을 계속 덮어버린다.






