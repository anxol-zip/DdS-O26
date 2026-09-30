const name = "Angel";
console.log(name);

console.log()

let age = 19;
console.log(age);

console.log()

// let person = {
//    name: "Angel",
//    age: 19,
//    isStudent: true
// };
// console.log(person);
// console.log(person.name + " tiene " + person.age + " años y es estudiante: " + person.isStudent);

// console.log()

console.log(`Hola, me llamo ${name} y tengo ${age} años`);

console.log()

function sum(a, b){
    return a + b;
}

const sumArrow = (a, b) => a + b;

console.log(sum(4,1));
console.log(sumArrow(6,7));

console.log()

const numbers = [1,2,3,4]
const doubles = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 == 0);
console.log(numbers, doubles, evens);

console.log();

const person = {name:"Ana", age:21};
const {name: nameP, age: ageP} = person;
console.log(nameP, ageP);

console.log();

const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second);