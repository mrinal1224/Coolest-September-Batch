


## Agenda
**Topics to cover in Javascript Oops** 
* Constructor functions
* Classes 
* Class based Inheritance with super and extends
* Static Methods of classes
* How to create Private properties





### 1. What are Constructor Functions and Why Use Them?

Constructor functions in JavaScript are a way to create multiple objects with the same structure, methods, and properties. They act like a blueprint for creating instances of a particular type of object.


**Let's See a Real-life analogy to understand this-**


1. Imagine you're opening a restaurant that serves a variety of pizzas. 

2. Each pizza has different toppings, sizes, and crust types. 

3. Instead of making each pizza from scratch every time an order comes in, you devise a recipe (a blueprint) that outlines the steps and ingredients necessary for making any pizza. 

4. This blueprint is like a constructor function in JavaScript.

### The Blueprint (Constructor Function)

The recipe for making a pizza acts as your "Pizza" constructor function. It specifies:

- **Toppings:** cheese, pepperoni, vegetables, etc.
- **Size:** small, medium, large.
- **Crust Type:** thin, thick, stuffed.

In JavaScript, this blueprint (constructor function) might look something like:

```javascript
function Pizza(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
    
    this.describe = function() {
        console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
    };
}

var customerOrder1 = new Pizza(['cheese', 'pepperoni'], 'medium', 'thin');

var customerOrder2 = new Pizza(['veggies', 'pepperoni'], 'small', 'thick');

customerOrder1.describe(); // Output: A medium pizza with cheese, pepperoni on a thin crust.

customerOrder1.describe();// Output: A small pizza with veggies, pepperoni on a thick crust.
```

**Step by Step Breakdown of the Code -**

This piece of code defines a constructor function named `Pizza` and then uses it to create an instance representing a customer's pizza order. 

Here's a step-by-step breakdown:

1. **Define the `Pizza` Constructor Function:**
   - The `Pizza` function is designed to create pizza objects. It takes three parameters: `toppings`, `size`, and `crustType`.
   - Inside the function, `this` refers to the new object that will be created when the function is called with `new`. The new keyword will make the this keyword ppomit to newly created object
   - `this.toppings = toppings;` assigns the array of toppings passed as an argument to the `toppings` property of the new object.
   - `this.size = size;` assigns the size argument (a string) to the `size` property of the new object.
   - `this.crustType = crustType;` assigns the crust type argument (a string) to the `crustType` property of the new object.
   - `this.describe = function() {...};` defines a method named `describe` on the new object. This method, when called, will log a string describing the pizza to the console, using the object's `size`, `toppings`, and `crustType` properties.

2. **Method `describe` Inside the `Pizza` Constructor:**
   - This method constructs and logs a string to the console that describes the pizza. It accesses the pizza's properties (`this.size`, `this.toppings`, and `this.crustType`) to create a descriptive string.
   - `this.toppings.join(", ")` combines all elements in the `toppings` array into a single string, separated by commas. This makes the array of toppings into a readable list.
   - The string is logged in the format: `"A [size] pizza with [toppings] on a [crustType] crust."`, where `[size]`, `[toppings]`, and `[crustType]` are replaced with the values of the corresponding properties of the pizza object.

3. **Create an Instance of `Pizza`:**
   - `var customerOrder1 = new Pizza(['cheese', 'pepperoni'], 'medium', 'thin');` creates a new `Pizza` object with the specified toppings (`'cheese'`, `'pepperoni'`), size (`'medium'`), and crust type (`'thin'`).

   - Now with using the same constructor function you can create another object

   - `var customerOrder2 = new Pizza(['veggies', 'pepperoni'], 'small', 'thick');` creates a new `Pizza` object with the specified toppings (`'veggies'`, `'pepperoni'`), size (`'small'`), and crust type (`'thick'`).


   - The `new` keyword is used to call the `Pizza` function, creating a new instance of a pizza object, which is then assigned to the variable `customerOrder1`.

4. **Call the `describe` Method of `customerOrder1` and `customerOrder2` :**

   - You can even create methods inside constructor functions and cal them with differnet Objects

   - `customerOrder1.describe();` calls the `describe` method on the `customerOrder1` object. This results in logging the description of the pizza to the console, specifically: `"A medium pizza with cheese, pepperoni on a thin crust."`

  - `customerOrder2.describe();` calls the `describe` method on the `customerOrder2` object. This results in logging the description of the pizza to the console, specifically: `"A small pizza with veggies, pepperoni on a thick crust."`


**Basically this is how you can work with a Constructor function**



Now,  let's dive into JavaScript  classes .

 Classes in ES6 (ECMAScript 2015) introduced a new syntax for creating objects and dealing with inheritance in JavaScript. This new syntax is more readable and concise.

### 1. Syntax and Structure of Classes in ES6

The syntax for declaring a class in ES6 is straightforward. Here's a basic structure:

```javascript
class MyClass {
  constructor() {
    // Initialization of properties
  }

  myMethod() {
    // Method implementation
  }
}
```

- **`class`** keyword is used to declare a class.
- **`MyClass`** is the name of the class.
- The **`constructor`** is a special method for creating and initializing objects created with the class. There can only be one constructor method in a class.
- **`myMethod()`** is an example of a class method that can be added to the class.

### 2. Class Constructor, Properties, and Methods

- **Constructor:** The `constructor` method is called automatically when a new instance of a class is created. It usually initializes class properties.
- **Properties:** Properties are essentially variables that belong to an object. In ES6 classes, properties are defined inside the constructor method.
- **Methods:** Methods are functions that belong to the class. They can be used to define behavior for class instances or to manipulate class data.

### 3. Static Methods and Properties

Static methods and properties are associated with the class itself, not instances of the class. This means you can call a static method without creating an instance of the class.

```javascript
class MyClass {
  static myStaticMethod() {
    console.log('This is a static method.');
  }
}

MyClass.myStaticMethod(); // This is a static method.
```

### 4. Comparing Classes to Constructor Functions

- **Constructor Functions** were the traditional way to create objects and implement inheritance in ES5 and earlier versions. They work well but can be less intuitive and harder to understand for complex inheritance structures.


- **Classes in ES6** offer a more straightforward syntax for creating objects and handling inheritance. They essentially provide syntactic sugar over JavaScript's existing prototype-based inheritance and do not introduce a new object-oriented inheritance model.

### Exercise: Rewrite the Constructor Function as an ES6 Class

Given your constructor function, let's rewrite it as an ES6 class.

```javascript
class Pizza {
  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
  }

  describe() {
    console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
  }
}

var customerOrder1 = new Pizza(['cheese', 'pepperoni'], 'medium', 'thin');
var customerOrder2 = new Pizza(['veggies', 'pepperoni'], 'small', 'thick');

customerOrder1.describe(); // Output: A medium pizza with cheese, pepperoni on a thin crust.
customerOrder2.describe(); // Output should be: A small pizza with veggies, pepperoni on a thick crust.
```

This ES6 class version provides a clear, concise way to define the `Pizza` class, including its constructor, properties, and the `describe` method. 

Creating instances of the `Pizza` class and calling the `describe` method works just as it did with the constructor function.




Classes are cool! but they can be cooler!, because with classes now you can manage clasical inheitance as well

Let's see how to do that

Extending the example of the `Pizza` class, let's demonstrate classical inheritance in ES6 using the `extends` and `super` keywords. 


Inheritance allows a class to inherit properties and methods from another class. 

The `extends` keyword is used in class declarations or class expressions to create a class as a child of another class. 

The `super` keyword is used to access and call functions on an object's parent.

### Example Scenario

Suppose we want to create a specialized type of pizza, `StuffedCrustPizza`, which extends the basic `Pizza` class. This new class has an additional property for the type of stuffing and a method to describe the stuffing.

### Extending the `Pizza` Class

```javascript
class StuffedCrustPizza extends Pizza {
  constructor(toppings, size, crustType, stuffingType) {
    super(toppings, size, crustType); // Call the parent class constructor with super
    this.stuffingType = stuffingType; // New property specific to StuffedCrustPizza
  }

  describeStuffing() {
    console.log(`This pizza has ${this.stuffingType} stuffing in the crust.`);
  }

  // Overriding the describe method
  describe() {
    super.describe(); // Call the describe method from the parent class
    this.describeStuffing(); // Additional description for the stuffing
  }
}
```

### Key Points

- **`extends`** is used to define a class as a child of another class.
- **`super`** (within the constructor) calls the parent class' constructor with the parameters required by the parent class. It's necessary to call `super()` before using `this` in a constructor, as it will initialize the parent's properties in the child class.
- **`super`** is also used to call parent class methods. In the overridden `describe` method, `super.describe()` is used to include the parent's description logic.

### Example Usage

```javascript
var specialOrder = new StuffedCrustPizza(['cheese', 'mushrooms'], 'large', 'thick', 'cheese and garlic');

specialOrder.describe();
// Expected output:
// A large pizza with cheese, mushrooms on a thick crust.
// This pizza has cheese and garlic stuffing in the crust.
```

### Explanation

- We create a new class `StuffedCrustPizza` that extends the `Pizza` class.
- The constructor of `StuffedCrustPizza` adds an additional parameter for `stuffingType`. It uses `super` to pass the `toppings`, `size`, and `crustType` to the parent class constructor.
- We added a new method `describeStuffing` to describe the unique feature of the stuffed crust pizza.
- We override the `describe` method to include the stuffed crust description. The method first calls the parent's `describe` method using `super.describe()`, then calls `this.describeStuffing()` to add the specific description of the stuffing.

This example illustrates how classical inheritance works in ES6, allowing for more structured and understandable object-oriented programming in JavaScript. 


**Fun Fact - We have just learnt classical Inheritanec in JS but do you know , Classical Inheritnace doesn't even exists in JS , Everything is a paradigm of Prototypal Inheritnace which we will learn in the next class**

 Below is the combined code that includes the original `Pizza` class and the new `StuffedCrustPizza` class that extends `Pizza` to demonstrate classical inheritance in ES6.

```javascript
// Define the base Pizza class
class Pizza {
  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
  }

  describe() {
    console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
  }
}

// Define the StuffedCrustPizza class that extends Pizza
class StuffedCrustPizza extends Pizza {
  constructor(toppings, size, crustType, stuffingType) {
    super(toppings, size, crustType); // Call the parent class constructor with super
    this.stuffingType = stuffingType; // New property specific to StuffedCrustPizza
  }

  describeStuffing() {
    console.log(`This pizza has ${this.stuffingType} stuffing in the crust.`);
  }

  // Overriding the describe method
  describe() {
    super.describe(); // Call the describe method from the parent class
    this.describeStuffing(); // Additional description for the stuffing
  }
}

// Creating instances and calling methods to demonstrate functionality
var customerOrder1 = new Pizza(['cheese', 'pepperoni'], 'medium', 'thin');
customerOrder1.describe(); // Output: A medium pizza with cheese, pepperoni on a thin crust.

var customerOrder2 = new Pizza(['veggies', 'pepperoni'], 'small', 'thick');
customerOrder2.describe(); // Output: A small pizza with veggies, pepperoni on a thick crust.

var specialOrder = new StuffedCrustPizza(['cheese', 'mushrooms'], 'large', 'thick', 'cheese and garlic');
specialOrder.describe();
// Expected output:
// A large pizza with cheese, mushrooms on a thick crust.
// This pizza has cheese and garlic stuffing in the crust.
```




Let's further extend our example with a static method, let's introduce a static method in the `Pizza` class. 

A static method is a function that is associated with the class, not with instances of the class. 

This means you can call a static method without creating an instance of the class. Static methods are often used for utility functions that do not require an instance of the class to work.

### Adding a Static Method

Let's add a static method `calculateTotalPizzasMade` that keeps track of the total number of pizzas made. To accomplish this, we'll also need to add a static property to keep count of every time a `Pizza` or `StuffedCrustPizza` is instantiated.

```javascript
class Pizza {
  static totalPizzasMade = 0; // Static property to keep count

  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
    Pizza.totalPizzasMade++; // Increment the count each time a new pizza is made
  }

  describe() {
    console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
  }

  // Static method
  static calculateTotalPizzasMade() {
    console.log(`Total pizzas made: ${Pizza.totalPizzasMade}`);
  }
}

// StuffedCrustPizza class remains the same
class StuffedCrustPizza extends Pizza {
  constructor(toppings, size, crustType, stuffingType) {
    super(toppings, size, crustType);
    this.stuffingType = stuffingType;
  }

  describeStuffing() {
    console.log(`This pizza has ${this.stuffingType} stuffing in the crust.`);
  }

  describe() {
    super.describe();
    this.describeStuffing();
  }
}

// Creating instances and calling methods
var customerOrder1 = new Pizza(['cheese', 'pepperoni'], 'medium', 'thin');
var customerOrder2 = new Pizza(['veggies', 'pepperoni'], 'small', 'thick');
var specialOrder = new StuffedCrustPizza(['cheese', 'mushrooms'], 'large', 'thick', 'cheese and garlic');

// Calling the static method without creating an instance
Pizza.calculateTotalPizzasMade(); // Output: Total pizzas made: 3
```

### Explanation of Static Methods

- **Static Methods** belong to the class rather than any particular object instance. They can be called directly on the class itself.
- **Use Cases**: Static methods are useful for utility functions, such as factory methods (methods that create instances of the class), or for operations that relate to the class as a whole rather than to individual instances.
- **Accessing Static Properties**: Within static methods, you can access static properties using the class name (e.g., `Pizza.totalPizzasMade`).

In our example, `calculateTotalPizzasMade` is a static method that outputs the total number of pizzas made. This demonstrates how static properties and methods can be used to maintain and access data that is relevant to the class as a whole, rather than to individual instances.





**How would you create private properties for a class in JavaScript?**


First of all what do you understand by the term `private`?


Private properties ensure that class data is encapsulated and not directly accessible from outside the class. This is a fundamental principle of object-oriented programming, improving security and data integrity.

In JavaScript ES6 and later versions, you can create private class properties by prefixing the property name with a `#` symbol. Private properties are accessible only within the class that defines them, making them useful for encapsulating class-specific data and behaviors that shouldn't be directly accessible from outside the class.

Let's modify our `Pizza` and `StuffedCrustPizza` classes to include private properties. For illustration, we'll make the `toppings`, `size`, and `crustType` properties of `Pizza` private, and add a private property to `StuffedCrustPizza` as well.

### Modified Example with Private Properties

```javascript
class Pizza {
  static totalPizzasMade = 0;
  #toppings; // Private property
  #size;     // Private property
  #crustType; // Private property

  constructor(toppings, size, crustType) {
    this.#toppings = toppings;
    this.#size = size;
    this.#crustType = crustType;
    Pizza.totalPizzasMade++;
  }

  describe() {
    console.log(`A ${this.#size} pizza with ${this.#toppings.join(", ")} on a ${this.#crustType} crust.`);
  }

  static calculateTotalPizzasMade() {
    console.log(`Total pizzas made: ${Pizza.totalPizzasMade}`);
  }
}

class StuffedCrustPizza extends Pizza {
  #stuffingType; // Private property

  constructor(toppings, size, crustType, stuffingType) {
    super(toppings, size, crustType);
    this.#stuffingType = stuffingType;
  }

  describeStuffing() {
    console.log(`This pizza has ${this.#stuffingType} stuffing in the crust.`);
  }

  describe() {
    super.describe();
    this.describeStuffing();
  }
}
```

### Key Points About Private Properties:

- **Encapsulation**: Private properties ensure that class data is encapsulated and not directly accessible from outside the class. This is a fundamental principle of object-oriented programming, improving security and data integrity.
- **Syntax**: Prefix property names with `#` to make them private. These properties can only be read or modified from within the class itself.
- **Access**: Private properties cannot be accessed or modified directly from outside the class. Attempts to do so will result in a syntax error.

### Example Usage

```javascript
var specialOrder = new StuffedCrustPizza(['cheese', 'mushrooms'], 'large', 'thick', 'cheese and garlic');
specialOrder.describe();
// Output:
// A large pizza with cheese, mushrooms on a thick crust.
// This pizza has cheese and garlic stuffing in the crust.

// Attempting to access a private property from outside the class
console.log(specialOrder.toppings); // Undefined, as toppings is private
// console.log(specialOrder.#toppings); // Syntax error: Private field '#toppings' must be declared in an enclosing class
```

In this modified example, the properties that are marked as private (`#toppings`, `#size`, `#crustType`, and `#stuffingType`) are only accessible within their respective classes. This modification demonstrates how to implement encapsulation in JavaScript ES6 classes, protecting the internal state of objects.


This is how you can work with Constructor Functions and Classes in JS

We will be using them to understand the next topic prototype and Prototypal Inheritance as well



