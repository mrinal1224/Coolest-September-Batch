// // Difference between function and arrow function

// function printName(){
//     console.log('Adam')
// }

// printName()

// // Arrow Functions

// const printAge =(age)=>{
//     console.log(age)
// }

// printAge(23)


// objects

const person1 = {
    name : "John",
    age : 23,

    greet : function(){
        console.log(this)
    }
}


const person2 = {
    name : "Adam",
    age : 23,

    greet : ()=>{
        console.log(this.name)
    }
}

person1.greet() // John says hi 
person2.greet() //