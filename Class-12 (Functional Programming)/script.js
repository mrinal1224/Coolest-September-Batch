function printName(name , cb , cb2){
    console.log(name) // John
    // cb = fn PrintAge
    cb('Mathews')
    // cb2 = fn printLastName
    cb2(20)
}

function printAge(age){
    console.log(age)
}

function printLastName(lastName){
    console.log(lastName)
}


printName('John' , printLastName , printAge)


