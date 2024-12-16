

**Agenda**
* Prototype Object
* Prototypal Inheritance
* __proto__ property
* Prototypal Chaining
* Object.create()


OK! Let's start 


Let's create a simple object in JS and we will see the ouput in the Browser

```js

const person = {
    name : 'John'
}


console.log(person) // show the output in the Browser



```

You will see the output like this

<img src='https://www.javascripttutorial.net/wp-content/uploads/2022/08/JavaScript-Prototype.png'>


You can cleary see the object but with that object you will also see something by the name `prototype` has been attached , What is this? and why it is there?

Let try to figure this out!

So in JS every object that you will create , Yes I am saying every Object (Arrays and Functions Included as they are also treated as Objects in JS) you will see a `Prototype` Attached , and `Prototype` is itself is an Object


Now try to click on that `Prototype` Object you will see a lot of methods and properties 

<img src='https://www.javascripttutorial.net/wp-content/uploads/2022/08/JavaScript-Prototype-object.png'/>


Let's use one out of them a very simple method `hasOwnProperty`


### Using the `hasOwnProperty` Method

The `hasOwnProperty` method in JavaScript is used to check whether an object has a particular property as a direct property or not

```javascript
const person = {
    name: 'John'
}

console.log(person.hasOwnProperty('name'));  // true
console.log(person.hasOwnProperty('age'));   // false
```

#### Explanation:
1. `person.hasOwnProperty('name')`: This returns `true` because `name` is a direct property of the `person` object.
2. `person.hasOwnProperty('age')`: This returns `false` because `age` is not a property defined on the `person` object.

Simple method right? but How were you able to use it?

Exactly! Because it is defined inside the object `Prototype`, thats why you were able to use it.

but this is not all the `Prototype` object can do

Let's see what else you can do with the `Prototype Object`




Suppose Now I want to create a Constructor Function and based on that Constructor function I want to create some objects , let's say we take an example of creating car Objects



Constructor function to create car Objects

```js
function Car(model, year) {
  this.model = model;
  this.year = year;

  // Method defined inside the constructor
  this.displayInfo = function() {
    return `This is a ${this.year} ${this.model}.`;
  };
}
```

Simple Constructor function with a displayInfo method 

Let's create two car Objects from it

```js

let car1 = new Car("Toyota Camry", 2021);
let car2 = new Car("Ford Mustang", 2023);

console.log(car1); 
console.log(car2);  

```


Take a look at the output now

<img src='https://i.ibb.co/xqZGx8R/car-object.png'/>

There are two car Objects from made from the `Car` constructor Function with all the properties defined 

If you see for both the Objects , the properties are Different but the same method is getting inside both the objects.

Suppose Now, you create 100 objects from this constructor function every function may have diffrent properties, but the method `displayInfo` is a generic method so for every object there will be a copy of that method.

Do you think this should be the right way of adding a method inside objects by creating copies of methods every time a new Object is created?

No! We are again violating the `DRY` principle

So how we will solve for this problem that the method `displayInfo` should not get copied multiple times for multiple objects?

`We will solve for this!` but first we have to look at the Prototype of these objects

If you look closely in the output there are now two Prototypes , One has been created for the `Car` Object and then if you open it there is one nested Prototype as well which is just the default prototype attached with every Object


<img src='https://i.ibb.co/4sZ7x0n/Screenshot-2024-04-14-at-11-57-47-PM.png'>

So now How about we do something like this that in the `Car` Object level Prototype we Manage to put in the `displayInfo` method?

So everytime A new Object will be created by the Constructor Function , `displayInfo` will be available to it inside the prototype only

How can we do it?

by Using the Prototype! 

Yes! JS allows you to add methods inside the Prototype as well , let's try to do this

```js

function Car(model, year) {
  this.model = model;
  this.year = year;
}

// Adding the displayInfo method to the prototype
Car.prototype.displayInfo = function() {
  return `This is a ${this.year} ${this.model}.`;
};

let car1 = new Car("Toyota Camry", 2021);
let car2 = new Car("Ford Mustang", 2023);

console.log(car1); 
console.log(car2);  

```

In JavaScript, the `Car.prototype.displayInfo` line is used to add a method to the `Car` constructor's prototype.

### Breakdown of the Code


1. **Prototype Modification:**
   - `Car.prototype.displayInfo = function() {...}` adds a `displayInfo` method to the prototype of the `Car` constructor.
   - `prototype` is a property of the constructor function, shared among all instances of `Car`. This means that `displayInfo` is not duplicated in memory for each instance. Instead, all instances share the same function via their prototype.

3. **How `displayInfo` Works:**
   - `displayInfo` is a method that, when called, uses `this` to access the properties of the instance on which it was called. `this.year` and `this.model` refer to the `year` and `model` properties of the specific `Car` instance.
   - The method returns a string describing the car, formatted with the `year` and `model` values of the specific instance.


### Why Use `prototype`?
Using the `prototype` allows all instances of `Car` to access the same `displayInfo` method, saving memory and promoting efficient code reuse. If the method were defined inside the constructor function itself, each instance would have its own copy of the method, which would consume more memory. So we have successfully bypassed the DRY rule

In summary, the `Car.prototype.displayInfo` line demonstrates an efficient way to add shared behavior (methods) to all instances of a constructor function in JavaScript.


**output-**

Now if you see the output , the `disaplyInfo` method is not inside the objects now

<img src='https://i.ibb.co/wCvGcc8/Screenshot-2024-04-15-at-1-20-03-AM.png'>

But now If you open the Prototype You will be able to see that at the constructor level Protoype that method is added

<img src='https://i.ibb.co/pnX51xj/Screenshot-2024-04-15-at-1-20-10-AM.png'>

You can even call this now

```js

console.log(car1.displayInfo()); 
console.log(car2.displayInfo()); 

```

<img src='https://i.ibb.co/Y0gNvRw/Screenshot-2024-04-15-at-1-24-40-AM.png'>

Cool Right?

If you notice what you are doing each and every Object now is getting the `displayInfo` function from the constructor Prototype, basically the `displayInfo` is getting inherited for all the objects , and this concpet is only in a nutshell is known as `Prototypal Inheritane`.




As you saw that we can now Add methods in the Car Prototype what if we now want to access the nested default Prototype and do some manipulation there as well 


In JS all the Nested Prototypes are connected with each other and they are linked 

Your `Car` constructor Protoype is having a link with the Default Object Prototype as well and this linkage is called as a Prototype chain

And you can see and access this with using the `__proto__` property

Let's See this 

```js
function Car(model, year) {
  this.model = model;
  this.year = year;
}

// Setting a generic method via __proto__ (not recommended)
Car.prototype.__proto__.displayGenericInfo = function() {
  return `This is a car from year ${this.year}.`;
};

let car1 = new Car("Toyota Camry", 2021);
let car2 = new Car("Ford Mustang", 2023);

console.log(car1.displayGenericInfo());
console.log(car2.displayGenericInfo());


```

**output**

<img src='https://i.ibb.co/JjRSJQW/Screenshot-2024-04-15-at-1-53-08-AM.png'/>


Now you see It has gone down to the next link of Prototype that is basically the Object level Default Prototype.

But Think now Is this right?


Nope!

**There can be some major problems with this**


In your JavaScript script, if you're looking to use `__proto__`, it can be fit to directly manipulate the prototype chain of objects. However, it's important to note that direct manipulation of `__proto__` is generally discouraged in favor of using `Object.create()`, `Object.getPrototypeOf()`, or `Object.setPrototypeOf()` as these are standard and less prone to causing performance issues or other bugs. `__proto__` is mainly supported for compatibility reasons.

### Where to Fit `__proto__` in the Provided Script

In the context of your script, if you insist on using `__proto__`, it could be demonstrated to illustrate how objects inherit properties and methods through their prototype chain. Here is an example of how you might integrate `__proto__` into your script, specifically in the section dealing with the car constructor function:

```js
function Car(model, year) {
  this.model = model;
  this.year = year;
}

// Setting a generic method via __proto__ (not recommended, just for demonstration)
Car.prototype.__proto__.displayGenericInfo = function() {
  return `This is a car from year ${this.year}.`;
};

let car1 = new Car("Toyota Camry", 2021);
let car2 = new Car("Ford Mustang", 2023);

console.log(car1.displayGenericInfo()); // This works, showing how __proto__ can be used to extend prototypes.
console.log(car2.displayGenericInfo());
```

### Why not to do this:

1. **Prototype Chain Manipulation:**
   - By assigning a method to `Car.prototype.__proto__`, you effectively add it to the prototype of `Car.prototype`, which is `Object.prototype` (since all objects in JavaScript inherit from `Object.prototype`). This method then becomes available to all objects unless specifically overridden. and all the other object may not have name year and all these properties.

2. **Why It's Not Recommended:**
   - Modifying `Object.prototype` (which happens when you modify `Car.prototype.__proto__`) is generally a bad practice because it affects all objects in the environment, potentially leading to unexpected behaviors in the codebase.

3. **Alternative and Recommended Approach:**
   - Rather than using `__proto__`, it's better to add methods directly to `Car.prototype`. This avoids the risks associated with prototype pollution and ensures that only instances of `Car` receive the new method:
   ```js
   Car.prototype.displayInfo = function() {
     return `This is a ${this.year} ${this.model}.`;
   };
   ```

---
title: Object.create
description: Concept Prototype
duration: 2100
card_type: cue_card
---

There is one more way in which we can achieve Prototypal Inheritance with a more direct approach that is by using Object.Create() method


Let's see how this works

`Object.create()` is a powerful method in JavaScript that allows you to create new objects with a specified prototype object and properties. This method provides a very direct form of prototypal inheritance without the need for defining constructor functions. Here's a step-by-step breakdown to understand how `Object.create()` works using the car example:

### Understanding `Object.create()`

The `Object.create()` method creates a new object and directly sets the new object's prototype to the object that is passed as its first argument. 

#### Syntax
```javascript
Object.create(proto, [propertiesObject])
```

### Example: Creating Cars with `Object.create()`

Let's apply `Object.create()` to create instances of cars, where each car can share a common set of behaviors (methods) defined in a prototype.

#### Step 1: Define the Prototype Object

First, we define an object that contains the methods that our car instances will inherit. This object will serve as the prototype for every car instance we create.

```javascript
let carPrototype = {
  displayInfo: function() {
    return `This is a ${this.year} ${this.model}.`;
  }
};
```

This `carPrototype` object has one method, `displayInfo`, which returns a string containing the car's year and model. The properties `year` and `model` are not defined in `carPrototype` because these will vary from instance to instance.

#### Step 2: Create Instances Using `Object.create()`

Now, we use `Object.create()` to create new car objects that inherit from `carPrototype`.

```javascript
let car1 = Object.create(carPrototype);
car1.model = "Toyota Camry";
car1.year = 2021;

let car2 = Object.create(carPrototype);
car2.model = "Ford Mustang";
car2.year = 2023;
```

Here, `car1` and `car2` are created with `carPrototype` as their prototype. After creating each car object, we assign specific values to their `model` and `year` properties.

#### Step 3: Use the Inherited Method

Now that `car1` and `car2` are set up with their properties, we can call the inherited `displayInfo` method:

```javascript
console.log(car1.displayInfo()); // "This is a 2021 Toyota Camry."
console.log(car2.displayInfo()); // "This is a 2023 Ford Mustang."
```

### Benefits of Using `Object.create()`

1. **Flexibility**: It allows for more flexible object creation compared to constructor functions, especially when creating objects that do not need all the functionality of a detailed constructor.
2. **Direct Prototype Assignment**: You can directly control which object should be the prototype without needing to link constructor functions.
3. **No Constructor Overhead**: Since there's no constructor function involved, there's no overhead of setting up a constructor (like setting up unused properties or methods).

### Conclusion

`Object.create()` provides a clean and efficient way to set up inheritance in JavaScript. It allows for the creation of objects with a specific prototype, enabling shared behavior across objects while allowing each object to have its own individual properties. This method is particularly useful in cases where objects are similar but do not require the complexity of a constructor function.



---
title: Tricky Interview Problems on Prototypes
description: Concept Prototype
duration: 2100
card_type: cue_card
---

**Note to Instructor- Discuss any 2 or 3 Questions from these rest can be provide in the post read**

### Question 1: Setting `__proto__` to `null`
**Question**: What happens if you manually set an object’s `__proto__` property to `null`? How would you access the object's original prototype after doing this?

**Explanation and Solution**:
Setting `__proto__` to `null` detaches the object from its prototype chain. This means it loses access to methods defined in `Object.prototype`, such as `toString()` and `hasOwnProperty()`.

**Code Example**:
```javascript
let obj = { name: 'Sample Object' };
console.log(obj.toString());  // Normally works

// Set prototype to null
obj.__proto__ = null;
try {
    console.log(obj.toString());  // This will throw an error
} catch (e) {
    console.log("Error:", e.message);
}

// There is no built-in way to restore the original prototype once it's set to null.
```

### Question 2: Constructor Property Manipulation
**Question**: Examine the following code. What does this code output and why? What would be a better way to ensure `Dog.prototype.constructor` is set correctly?
```javascript
function Animal() {}
Animal.prototype.speak = function() {
  console.log("Sound!");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);

const dog = new Dog();
Dog.prototype.constructor = Animal;
console.log(dog.constructor.name);
```

**Explanation and Solution**:
This code will incorrectly output "Animal" because `Dog.prototype.constructor` was set to `Animal` instead of `Dog`.

**Code Example**:
```javascript
// Correct way
Dog.prototype.constructor = Dog;
console.log(dog.constructor.name);  // Correctly outputs "Dog"
```

### Question 3: Global Prototype Modification
**Question**: If `Object.prototype.method = function() {}` is defined, how does it affect new and existing objects? Why might this be a bad practice?

**Explanation and Solution**:
Adding a method to `Object.prototype` makes that method available to all JavaScript objects, which can lead to unintended consequences and conflicts.

**Code Example**:
```javascript
Object.prototype.method = function() { console.log("Method on every object!"); };

let obj = {};
obj.method();  // Outputs: "Method on every object!"

let arr = [];
arr.method();  // Outputs: "Method on every object!"
```

### Question 4: Circular Prototype Chain
**Question**: Can you create a circular prototype chain in JavaScript? What would be the consequences of doing so?

**Explanation and Solution**:
JavaScript engines prevent creating circular prototype chains to avoid infinite loops, which could lead to performance issues or crashes.

**Code Example**:
```javascript
function A() {}
function B() {}

let a = new A();
let b = new B();

// Attempting to create a circular prototype chain
A.prototype = b;
try {
    B.prototype = a;  // Throws TypeError in most JS environments
} catch (e) {
    console.log("Error:", e.message);
}
```

### Question 5: Direct Prototype Assignment
**Question**: Consider the following code snippet. What is the output of each `console.log` statement and why?
```javascript
function Cat(name) {
  this.name = name;
}
const fluffy = new Cat("Fluffy");
fluffy.__proto__ = { age: 5 };

console.log(fluffy.age);
console.log(fluffy.hasOwnProperty('age'));
console.log(fluffy.__proto__ === Cat.prototype);
```

**Explanation and Solution**:
- `console.log(fluffy.age);` outputs `5`, as `age` is on the new prototype.
- `console.log(fluffy.hasOwnProperty('age'));` outputs `false`, as `age` is not a direct property of `fluffy`.
- `console.log(fluffy.__proto__ === Cat.prototype);` outputs `false` because `fluffy.__proto__` was explicitly changed.

**Start the Doubt Session**
