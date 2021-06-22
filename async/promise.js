// Promise is a JavaScript object for asynchronus operation.
// state : pending -> fulfilled or rejected
// pending 상태 : promise가 만들어져서 우리가 지정한 operation이 수행 중일 때
// fulfilled 상태 : operation을 성공적으로 다 끝났을 때 
// rejected 상태 : file을 찾을 수 없거나 network에 문제가 생겼을 때

// Producer vs Consumer
// promise에는 우리가 원하는 기능을 수행해서 해당하는 데이터를 만들어 내는 Producer
// 우리가 원하는 데이터를 소비하는 Consumer


// 1. Producer
// when new Promise is create, the excutor runs automatically.
const promise = new Promise((resolve,reject)=>{
    // doing some heavy work(network, read files)
    console.log('doing something...')
    setTimeout(()=>{
        // resolve('ellie')
        reject(new Error('no network'))
    },2000)
})

// promise를 만드는 순간 우리가 전달한 excutor라는 콜백 함수가 바로 실행 되는것을 볼 수 있다.
// 즉 promise 안에 network 통신을 하는 코드를 작성했다면, promise가 만들어지는 그 순간 바로 network 통신을 수행하게 된다.
// 만약 network요청을 사용자가 요구했을 때만 해야 하는 경우라면 
// 즉 사용자가 버튼을 눌렀을 때 network 요청을 해야하는 경우라면
// 위처럼 작성하게 되면 사용자가 요구하지 않았는데 불필요한 network 통신이 일어날 수 있다.
// 그래서 promise를 만드는 순간 그 안에 전달한 excutor라는 콜백 함수가 바로 실행 되기 때문에 이 점을 유의 해야한다. 

// 2. Consumers : then, catch, finally
promise.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('finally')
})

// then : promise가 정상적으로 잘 수행이 되어서 마지막에 최종적으로 resolve 라는 콜백 함수를 통해서
// 전달한 값이 value의 파라미터로 전달 되어져서 들어옴
// then을 이용하고 나면 return으로 다시 promise 가 돌아오고 거기서 다시 .catch를 할 수있다.

// catch : promise가 비정상적으로 수행이 되어 reject 라는 콜백 함수를 통해서
// 전달한 값이 error의 파라미터로 전달 되어져서 들어옴 catch는 error를 핸들링할때 사용한다.

// finally : 성공하든 실패하든 무조건 실행 하는 함수

// function onClick (){
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('함수를 실행시켜서 비동기 통신')
//         },2000)
//     }).then((result)=>{
//         const test = result
//          console.log(test)
//     }).catch((e)=>{
//          console.log(e)
//     })
// }

// onClick()


// 3. Promise chaining 
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },1000)
})

fetchNumber
.then((num)=>{return num * 2})
.then((num)=>{return num * 3})
.then((num)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num-1)
        },1000)
    })
})
.then((num)=>{
    console.log(num) // 5가 출력됨
})

// 4. Error Handling
const getHen = () => {
    return (
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('🐓')
            },1000)
        })
    )
}

const getEgg = (hen) => {
    return (
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(`${hen} => 🥚`)
            },1000)
        })
    )
}

const cook = (egg) => {
    return(
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(`${egg} => 🍮`)
            },1000)
        })
    )
}

getHen()
.then((hen)=>{return getEgg(hen)})
.then((egg)=>{return cook(egg)})
.then((meal)=>console.log(meal))


