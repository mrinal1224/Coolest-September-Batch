let person1 = {
  name: "Alice",
  details: {
    age: 30,
    gender: "Female",
    hobbies : ['Swimming' , 'Dancing' , 'Basketball']
  },

  greet : function(){
    console.log("Hi")
  }
};

function deepClone(input) {
  // write the code that will create a deep clone

  if (typeof input !== "object") {
    return input;
  }

  let clone = {};

  const keys = Object.keys(input);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    clone[key] = deepClone(input[key]);
  }

  return clone;
}

const deepCopyPerson1 = deepClone(person1);

deepCopyPerson1.name = 'Mark'
deepCopyPerson1.details.gender = 'Male'

console.log(person1)

console.log(deepCopyPerson1)



