function printNameAndAge(location, occupation) {
  console.log(
    `My name is ${this.name} and I am ${this.age} years old I live in ${location} And I am a ${occupation}`
  );
}

const person1 = {
  name: "John",
  age: 25,
};

// person1.printNameAndAge("Delhi"); // john , 25

const person2 = {
  name: "Adam",
  age: 20,
};

const person3 = {
  name: "Steve",
  age: 30,
};
// person1.printNameAndAge()

// call method

printNameAndAge.call(person2, "Mumbai", "Developer");

// person3.printNameAndAge()
