let zoo1 = {
    name: "Amazing Zoo",
    location: "Melbourne, Australia",
    animals: [
      {
        species: "Lion",
        favoriteTreat: "Meat",
      },
      {
        species: "Panda",
        favoriteTreat: "Leaves",
      },
    ],
  };


//   let arr = [1,2,3 ,[3 ,4 ,5 , {'name':'Atul'}]]

 let zoo2 = zoo1 // wrong way of making copy



// spread operator

 let zoo1shallowCopy = {...zoo1} // Shallow Copy

 
// Shallow copy only works on the topmost layer of 
// the object it cannot go deep down tp nested properties

// zoo1shallowCopy.location = 'Kerela , India'
// zoo1shallowCopy.animals[1].species = 'Elephant'

// deep copy

let zooString = JSON.stringify(zoo1)
// console.log(zooString)
let deepCopyZoo = JSON.parse(zooString)




deepCopyZoo.location = 'Kerela , India'
deepCopyZoo.animals[1].species = "Elephant"


console.log(zoo2===zoo1) // true
console.log(zoo1shallowCopy === zoo1) // false
console.log(zoo1.animals === zoo1shallowCopy.animals) // true
console.log( zoo1 ===  deepCopyZoo) // false
console.log(zoo1.animals === deepCopyZoo.animals) // false

console.log(zoo1)
console.log(deepCopyZoo)






// console.log(zoo1shallowCopy)