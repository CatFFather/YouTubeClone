// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join('|')
  console.log(result)
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const retult = fruits.split(',')
  console.log(retult)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.sort((a,b)=>{
    return b-a
  })
  console.log(result)
  console.log(array)   // 배열 자체도 순서가 바뀌어있음


  const array2 = [1, 2, 3, 4, 5];
  const result2 = array2.reverse()
  console.log(result2)
  console.log(array2) // 배열 자체도 순서가 바뀌어있음
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0,2)
  console.log(result) // 새로운 배열로는 [1,2]
  console.log(array)  // 기존 배열은 [1,2,3] 으로 됨

  const array2 = [1, 2, 3, 4, 5];
  const result2 = array2.slice(2,5) // 배열에서 원하는 부분만 return해서 쓰고싶을 때 
  console.log(result2) // 새로운 배열로는 [3,4,5]
  console.log(array2)  // 기존 배열은 [1,2,3,4,5] 으로 됨
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  console.log(students)
  students.forEach((student,index)=>{
    student.score=='90'&& console.log(student) 
  })
  const result = students.filter((student,index)=>{
    return student.score=='90'
  })
  console.log(result)

  const result2 = students.find((student,index)=>{  // --> 첫 번째로 true가 된 값을 return 한다. 
    return student.score=='90'
  })
  console.log(result2)
}

// Q6. make an array of enrolled students
{
 const result = students.filter((student,index)=>{
   return student.enrolled == true
 })
 console.log(result)
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student,index)=>{
    return student.score
  })
  console.log(result)
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.filter((student,index)=>{
    return student.score<50
  })
  console.log(result)
  const result2 = students.some((student,index)=>{  // 배열의 요소 중 하나라도 조건이 맞으면 true 
    return student.score<50
  })
  console.log(result2)

  const result3 = students.every((student,index)=>{ // 배열의 모든 요소가 조건에 맞아야 true 
    return student.score<50
  })
  console.log(result3)

}

// Q9. compute students' average score
{
  let sum =0
  let average = 0
  students.forEach((student,index)=>{
    sum= sum + student.score
  })
  average= sum/students.length
  console.log(average)

  const result = students.reduce((prev,curr)=>{
    return prev+curr.score
  },0)
  console.log(result/students.length)

}
    
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student,index)=>{
    return student.score
  })
  console.log(result.join())
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.sort((a,b)=>{
    return a.score - b.score
  })
  console.log(result)
}
