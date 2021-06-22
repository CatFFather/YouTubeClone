// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true)
console.log(json)   // true

json = JSON.stringify(['apple','banana'])
console.log(json)   // ["apple","banana"]

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump: function(){
        console.log(`${this.name} can jump!`)
    }
}
json = JSON.stringify(rabbit)
console.log(json) // {"name":"tori","color":"white","size":null,"birthDate":"2021-06-02T14:52:27.482Z"}

json = JSON.stringify(rabbit,['name','color','size'])
console.log(json)   // {"name":"tori","color":"white","size":null}

json = JSON.stringify(rabbit,(key,value)=>{
    console.log(`key : ${key}, value : ${value}`);
    return key==='name'? 'ellie' : value
})
console.log(json) // {"name":"ellie","color":"white","size":null,"birthDate":"2021-06-02T14:52:27.482Z"}


// 2. JSON to Object
// parse(json)
console.clear()
json = JSON.stringify(rabbit)
let obj = JSON.parse(json)
console.log(obj)     
rabbit.jump()
// obj.jump() // 오류 발생 

console.log(rabbit.birthDate.getDate())
// console.log(obj.birthDate.getDate()) // 오류 발생

obj = JSON.parse(json,(key,value)=>{
    console.log(`key : ${key}, value : ${value}`);
    return key ==='birthDate' ? new Date(value): value
})
console.log(obj)
console.log(obj.birthDate.getDate())

