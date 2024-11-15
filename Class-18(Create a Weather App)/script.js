const toys = {
    toy1: {name :'Teddy Bear' , color : 'Brown'},
    toy2: {name :'Race Car' , color : 'Red'},
    toy3: {name :'Doll' , color : 'Pink'}
}

const jsonData = JSON.stringify(toys)

// JSON.parse

const objVal = JSON.parse(jsonData)

console.log(toys)
console.log(jsonData)
console.log(objVal)

const age = 23

let str = `My age is ${age}`

console.log(str)