// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing (하나의 함수는 한가지의 일만 하도록 만들자)
// naming : doSomething, command, verb (동사형태로 네이밍)
// e.g. createCardAndPoint -> createCard, createPoint (복잡한건 나눠라)
// function is object in JS

function printHello(){
    console.log('Hello')
}
printHello()

function log(message){
    console.log(message)
}
log('Hello@@@@@')
log(1234)

// 2. Parameters
// premitive parameters: passed by value
// (premitive 타입은 메모리에 value가 저장되어있기 때문에 그대로 전달) 
// object parameters: passed by reference
// (object는 ref가 전달되어짐 )

function changeName(obj){
    obj.name = 'coder'
}
const ellie = {name : 'ellie'}
changeName(ellie)
console.log(ellie)

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`)
}
showMessage('Hi!')

// 4. Rest parameters (added in ES6)
function printAll(...args){
    console.log(args)
    for(let i =0; i <args.length; i++){
        console.log(args[i])
    }

    for(const arg of args){
        console.log(arg)
    }
}
printAll('dream','coding','ellie')

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage (){
    let message = 'hello';
    console.log(message) // local variable
    console.log(globalMessage)
    function printAnother(){
        console.log(message)
        let childMessage = 'hello'
    }
}
printMessage()

// 6. return a value
function sum(a,b){
    return a+b
}
const result = sum(1,2) //3 
console.log(`sum : ${sum(1,2)}`)

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}

// good 
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to orther functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){   // anonymous function
    console.log('print')
}
print()
const printAgain = print
printAgain()

const sumAgain = sum
console.log(sumAgain(1,3))

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer==='love you'){
        printYes()
    }else{
        printNo()
    }
}
const printYes = function(){
    console.log('yes!')
}

const printNo = function(){
    console.log('no!')
}

randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)


// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!')
const add = (a,b) => a+b
const add = function(a,b) {
    return a+b
}
const simpleMultiply = () =>{
    // do something more
    return a * b
}

// Fun quiz time
// function calculate(command,a,b)
// command: add, substract, divide, multiply, remainder