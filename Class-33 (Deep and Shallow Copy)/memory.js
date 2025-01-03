// Memory of JS DataTypes

// Primtive DataTypes

let numOne = 50
let numTwo = numOne
numOne = 100

console.log(numOne) // 100
console.log(numTwo) // 50


// Objects

const person1 = {
    name : 'John',
    age : 23
}

let person2 = person1

 person2.name = "Adam"

console.log(person1)
console.log(person2)

