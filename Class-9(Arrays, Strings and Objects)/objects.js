let person1 = {
  name: "Adam",
  age: 24,
  ownsAcar: true,
  gender: "M",
};

let person2 = {
  name: "Steve",
  age: 20,
  ownsAcar: false,
  gender: "M",
};

console.log(person1);
console.log(person2);

// let's create an obj for captain america

let cap = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 110,

  allies: ["Tony stark", "Hulk", "Thor"],

  isAvenger: true,

  address: {
    country: "USA",
    city: {
      cityName: "Brooklyn",
      pincode: 123456,
    },
  },

  sayHi: function() {
    console.log("Cap says Hi");
  },
};


// dot notation bracket notation

console.log(cap.firstName) // dot notation
console.log(cap['age'])


console.log(cap.address.city.cityName)

cap.allies.push('Bucky')

console.log(cap.allies[1])

cap.isAvenger = false

cap.movies= ['Age of Ultron' , 'Winter Solider']



delete cap.age

console.log(cap)

cap.sayHi()


