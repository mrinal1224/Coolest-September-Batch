let car1 = {
  name: "Mercedes",
  color: "Red",
  drive: function (speed) {
    return `I am driving a ${this.color} ${this.name} ${speed} `;
  },
};

let car2 = {
  name: "BMW",
  color: "White",
};

// call

// let newfn = car1.drive.bind(car2 , '200km/hr' )
// let value = newfn()

// console.log(value)

// Bind Polyfill

// car2 {
//     name:'BMW',
//     color :"white",
//     myFn : drive()

// }

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this != "function") {
    throw new Error(this + " -> cannot be bounded");
  }

  context.myfn = this; // drive

  return function (...newArgs) {
    return context.myfn(...args, ...newArgs);
  };
};

let newfn = car1.drive.myBind(car2, "200km/hr"); // returns the bound function
let value = newfn(); // call it
console.log(value);
