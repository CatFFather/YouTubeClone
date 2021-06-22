// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.sort((a, b) => {
        return b - a;
    });
    console.log(result);
    const array2 = [1, 2, 3, 4, 5];
    const result2 = array2.reverse();
    console.log(result2);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(0, 2);
    console.log(array.slice(2));
    console.log(array.splice(0, 3));
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
    const result = students.find((student) => {
        return student.score == 90;
    });
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => {
        return student.enrolled == true;
    });
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    // const result = students.sort((a, b) => {
    //     return a - b;
    // });
    // console.log(result);
    let result2 = [];
    students.forEach((student) => {
        return result2.push(student.score);
    });
    console.log(result2);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.filter((student) => {
        return student.score < 50;
    });
    console.log(result);
}

// Q9. compute students' average score
{
    let sum = 0;
    let average = 0;
    students.forEach((student) => {
        sum = sum + student.score;
    });
    average = sum / students.length;
    console.log(average);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    let result2 = [];
    students.forEach((student) => {
        return result2.push(student.score);
    });
    const result = result2.join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    let result2 = [];
    students.forEach((student) => {
        return result2.push(student.score);
    });
    let result = result2.sort((a, b) => {
        return a - b;
    });
    result = result.join();
    console.log(result);
}
