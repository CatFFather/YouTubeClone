// // JavaScript is synchronus (JS는 동기적이다.)
// // Execute the code block in order after hoisting. (호이스팅이 된 후로부터 하나하나 동기적으로 실행된다.)
// // hoisting : var, function declaration (var 변수와 함수 선언들이 자동적으로 제일 위로 올라가는 것)
// // hoisting 이 된 후로부터 코드가 나타나는 순서대로 자동적으로 실행 된다. 

// // console.log('1')
// // console.log('2')
// // console.log('3')
// // // 1,2,3 순서대로 코드가 실행된다. (동기적)

// console.log('1')
// setTimeout(function(){
//     console.log('2')
// },1000)
// console.log('3')
// // 1,3,2 순서대로 코드가 실행됨 (비동기)
// // 1 이 찍히고 setTimeout이 1초 뒤에 콜백 함수를 실행하라는 명령을 한 후 1초를 기다리지 않고
// // 바로 3을 찍고 이후에 이전에 명령한 1초가 지났을 때 2가 찍힌다.

// // setTimeout에서 전달하는 함수는 바로 실행되는 것이 아니라 setTimeout이라는 함수 안에 하나의 파라미터 인자로
// // 우리가 만든 함수를 전달해 준다. 그래서 지금 당장 실행하지는 않고 나중에 1초가 지난 뒤에 '내 함수를 실행해 줘', '내 함수를 나중에 불러줘'
// // 해서 Callback 함수라고 한다.

// // 콜백도 항상 비동기 일때만 사용할까? 
// // Synchronus callback (즉각적으로 실행하는 , 동기적으로 실행하는 콜백)
// function printImmediately(print){
//     print()
// }
// printImmediately(()=>{
//     console.log('hello')
// })

// // Asynchronus callback (나중에 언제 실행될지 모르는 , 예측 불가능한 콜백)
// function printWithDelay(print,timeout){
//     setTimeout(print,timeout)
// }
// printWithDelay(()=>{
//     console.log('async callback')
// },3000)


// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'))
            }
        },2000)
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({ name: 'ellie', role: 'admin'})
            } else{
                onError(new Error('no access'))
            }
        },1000)
    }
}

const userStorage = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(
    id,
    password,
    (user)=>{
        userStorage.getRoles(
            user,
            (userWithRole)=>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            (error)=>{
                console.log(error)
            }
        )
    },
    (error)=>{console.log(error)})
