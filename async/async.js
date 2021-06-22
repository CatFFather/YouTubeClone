// async & await
// clear style of using promise :)
// (깔끔하게 promise를 사용하는 방법)

// 1. async
async function fetchUser(){
    // do network reqeust in 10 secs....
    return 'ellie'
}

const user = fetchUser()
user.then((result)=>{
    console.log(result)
})
console.log(user)

// 2. await
function delay(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}


async function getApple(){
    await delay(2000)
    return '🍎'
}

async function getBanana(){
    await delay(1000)
    return '🍌'
}

// function pickFruites1(){
//     return getApple().then((apple)=>{
//         return getBanana().then((banana)=>{
//             return `${apple} + ${banana}`
//         })
//     })
// }

// pickFruites1().then((all)=>{
//     console.log(all)
// })


// async function pickFruites2(){
//         const applePromise = getApple()
//         const bananaPromise = getBanana()
//         const apple = await applePromise
//         const banana = await bananaPromise
//         return `${apple} + ${banana}`

// }

// pickFruites2().then((all)=>{
//     console.log(all)
// })


// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then((fruits)=>{
        console.log(fruits)
       return fruits.join(' + ')
    })
}
pickAllFruits().then((result)=>{
    console.log(result)
})

function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()])
}

pickOnlyOne().then((result)=>{
    console.log(result)
})
