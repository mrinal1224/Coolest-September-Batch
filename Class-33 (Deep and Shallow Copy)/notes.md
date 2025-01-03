---
title: Agenda
description:
duration: 600
card_type: cue_card
---

**Agenda of this Lecture:**
- Memory of JS Datatypes (Primitive and reference)
- Shallow Copy and Deep Copy
- Flatteing an Object
- Truthy and Falsy Values


---
title: Memory of JS DataTypes
description:
duration: 600
card_type: cue_card
---


1. Data types can be a bit of a mind boggling concept. But as programmers, we use data types everyday – so they're something we should understand.

2. Question is, how does the computer store these data types? It can't possibly treat every data type the same.

3. In JavaScript, data types are split in two categories, and the computer treats each one differently. We have primitive data types and reference data types. 

4. But what are these? And why is it important to know the difference? That's what we'll learn in this Section of the Class

## Primitive Data types in JS

These data types are pretty simple, and are sometimes treated as the lowest level of implementation of a programming language. They are not objects, and do not have methods.

Examples of such data types are numbers, strings, booleans, null, and undefined.

<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--1-.png'>


**Fun Fact Incominggg..->**
 you might be wondering about strings, because they do have methods. The fact is, JavaScript converts primitive strings to string objects, so that it is possible to use string object methods.


 #### How are Primitive Datatypes Stored in Memory

 1. When you declare a primitive data type in JavaScript, it is stored on a stack. A stack is a simple data structure that the computer uses to store and retrieve data quickly.

2. A primitive data type on the stack is identified by the variable name you used for declaration in your program. With each primitive data type you create, data is added to the stack.

3. To implement this, say we declare a variable, numOne, and give it a value of 50. We go on to create another variable, numTwo, and assign it the same value of 50. So both variables have the same value.

4. What happens on the stack is that, the computer creates room for numOne and stores its assigned value on the stack. When numTwo is created, the computer again creates room, and stores 50 on the stack. It does not matter that both variables are assigned the same value.

```js
let numOne = 50;
let numTwo = 50; //numTwo=numOne=50
console.log(numOne); //outputs 50
console.log(numTwo); //outputs 50

```

<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--3-.png'>



5. What if during the coding process, we decided to update the value of numOne to say, 100? Does it mean numTwo will change too? The answer is no.

6. Since numOne and numTwo were stored differently on the stack, updating one of them will not affect the other. And we can experiment with that by actually trying it out in our code editor.

7. Logging numOne to the console will output 100, and logging numTwo will output 50. So, in effect, the two variables have no relationship to each other.


```js
let numOne = 50;
let numTwo = numOne; //numTwo=numOne=50
numOne = 100;
console.log(numOne); //outputs 100
console.log(numTwo); //outputs 50

```

<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--4-.png'>

Now that we've seen how easy it is to handle primitive data types, let's see how similarly reference data types work.


### Reference Datatypes

Reference data types, unlike primitive data types, are dynamic in nature. That is, they do not have a fixed size.

Most of them are considered as objects, and therefore have methods. Examples of such data types include arrays, functions, collections, and all other types of objects.


<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--2-.png'>


Let's see How Reference Datatypes are stored in the Memory

The difference comes in when the computer has to store a reference data type. When you create a variable and assign it a value that is a reference data type, the computer does not directly store that data type in that variable (as is the case with primitive types).

What you have assigned to that variable is a pointer that points to the location of that data type in memory. Confusing? I know , Let me Simplify this


Let's take a similar code as we did for primitive but this time we will try it with and Object


```js
let object1 = {
name:'Bingeh',
age:18
};
let object2 = object1;

//updating object1,
object1.age = 20;

console.log(object2); //we see that object2 also updates the age attribute
```


How is this happening?

<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--5-.png'>


1. As you can see in the image above, we have two data structures now. A stack, and a heap. 

2. Say we declared an object, for example. The object itself is stored on a heap, and its pointer is stored on a stack. The pointer is identified by the object's variable name, and points to that object.

3. Now, we could create a variable, object1, and assign an object to it. What if like before, we create another variable object2, and assign it to object1. Does that mean another object will be created on the heap? The answer is no.

4. Since the object already exists on the heap, object2 and object1 will both point to the same object.

5. Another difference comes in when we update object1. If we log both variables to the console, we see that the change affected them both. 

6. This is because they are pointing to the same object on the heap – and updating one variable of course affects the other.


<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--6-.png'>

Now you know the difference between primitive and reference data types.

---
title: Deep Copy Shallow Copy
description:
duration: 600
card_type: cue_card
---


In JS , We often have to make copies of Objects , There are several use cases of making copies of objects , the most important use case is Immbutablity


Immutability: In functional programming paradigms, data immutability is a core concept. This means once data is created, it should not be changed. When you need to update an object, you create a copy of it with the modifications, rather than changing the original object. 


So Now , There are two ways of Creating of creating object Copies in JS

1. Shallow Copy
2. Deep Copy


#### Shallow copy

Shallow copying refers to the process of creating a new object that is a copy of an existing object, with its properties referencing the same values or objects as the original. In JavaScript, this is often achieved using methods like `Object.assign()` or the `spread syntax ({...originalObject})`. 

Shallow copying only creates a new reference to the existing objects or values and doesn’t create a deep copy, which means that nested objects are still referenced, not duplicated.


Let's see with an Example

```js
let zoo = {
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

let shallowCopyZoo = { ...zoo };
console.log(shallowCopyZoo) // Prints the whole copied Zoo Object

shallowCopyZoo.location = 'Kerela , India'

console.log(zoo)
console.log(shallowCopyZoo)


// shallowCopyZoo.animals[0].favoriteTreat = "🍖";
// console.log(zoo.animals[0].favoriteTreat); 
// "🍖", not "🥩"
```
1. console.log(shallowCopyZoo) prints the copied zoo object showing its details including the modified location. (Kerela India)

2. console.log(zoo) prints the original zoo object, which remains unchanged with respect to the location.
(Australia , Melbourne)


Perfect!

But Now let's try to change any nested properties inside the array or the nested object , let's change favourite treat


```js
let zoo = {
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

let shallowCopyZoo = { ...zoo };
console.log(shallowCopyZoo) // Prints the whole copied Zoo Object

shallowCopyZoo.location = 'Kerela , India'

console.log(zoo)
console.log(shallowCopyZoo)

// Changing the favorite treat of Panda in copied obj
shallowCopyZoo.animals[1].favoriteTreat = "Fruits";

// Accesing the favorite treat from original Object
console.log(zoo.animals[1].favoriteTreat); 
//"Fruits" will be printed, not "Leaves"


console.log(zoo)
console.log(shallowCopyZoo)


console.log(zoo.animals === shallowCopyZoo.animals)
// true

console.log(zoo === shallowCopyZoo)
// false
```


This can lead to potential issues in code bases and make life especially hard when working with large Modifying a nested object in the shallow copy also affects the original object and any other shallow copies, as they all share the same reference.



## Deep Copy

To create a deep copy of an object in JavaScript when the object contains nested structures (like arrays or other objects), a common technique involves using `JSON.stringify()` and `JSON.parse()`. This method serializes the object to a JSON string and then parses that string back into a new JavaScript object. Here’s how you can do it for the given `zoo` object and what each step does:

### Step-by-Step Explanation

1. **Serialize the Object to a JSON String**:
   Using `JSON.stringify()`, convert the entire `zoo` object into a JSON-formatted string. This string represents a flat, textual version of the original object, including all nested structures.

   ```javascript
   let zooString = JSON.stringify(zoo);
   ```

   At this point, `zooString` contains a string representation of the `zoo` object. The entire structure of the object, including its nested arrays and their contents, is flattened into this string.

2. **Deserialize the JSON String back to a JavaScript Object**:
   Using `JSON.parse()`, convert the JSON string back into a JavaScript object. This step creates a new object that is structurally identical to the original but completely independent of it.

   ```javascript
   let deepCopyZoo = JSON.parse(zooString);
   ```

   Now, `deepCopyZoo` is a new object that has the same data as `zoo` but with completely separate references for all its nested structures. This means changes to nested objects in `deepCopyZoo` won't affect those in the original `zoo` object.

### Implementation Code
Here’s how you would modify your code to create a deep copy of the `zoo` object using the described method and demonstrate that it behaves as expected:

```javascript
let zoo = {
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

// Creating a deep copy using JSON.stringify and JSON.parse
let zooString = JSON.stringify(zoo);
let deepCopyZoo = JSON.parse(zooString);

// Modifying the location in the deep copy
deepCopyZoo.location = 'Kerala, India';

// Changing the favorite treat of Panda in the deep copy
deepCopyZoo.animals[1].favoriteTreat = "Fruits";

console.log(zoo);  // Original object, location and panda's treat are unchanged
console.log(deepCopyZoo);  // Modified object, location changed to Kerala and panda's treat to Fruits

// Accessing the favorite treat from original Object
console.log(zoo.animals[1].favoriteTreat);  // "Leaves" will be printed, not "Fruits"
```

### Conclusion
- This method works well for objects without functions, Dates, undefined, or other non-serializable values because `JSON.stringify()` can lose or alter these types of data.
- For objects containing functions or other complex types, a different deep copying method would be needed, such as using a library or a custom recursive function.

---
title:Your Own Deep Copy Function
description:
duration: 600
card_type: cue_card
---

1. Creating a simple JavaScript object with nested properties and a method

2. Then, we will write a custom function to deep clone this object, ensuring that even the methods and nested structures are copied correctly. Let's go through each step:

### Step 1: Create the Original Object
We'll define an object named `originalObj` with nested properties and a method. The object will have the following structure:

- `name`: a simple string property.
- `details`: a nested object with properties.
  - `age`: a numeric property.
  - `hobbies`: an array of strings.
- `greet`: a method that prints a greeting message.

Here's the code for the original object:

```javascript
const originalObj = {
    name: "Alice",
    details: {
        age: 30,
        hobbies: ["reading", "cycling", "hiking"]
    },
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};
```

### Step 2: Write a Deep Clone Function
The function to deep clone this object needs to handle various data types such as objects, arrays, and functions. We'll use recursion to ensure all nested properties are cloned.

Here's a simple implementation of a deep clone function using recursion:

```javascript
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Array) {
        let copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }

    if (obj instanceof Function) {
        return obj.bind({});
    }

    if (obj instanceof Object) {
        let copy = {};
        for (let attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = deepClone(obj[attr]);
            }
        }
        return copy;
    }

    throw new Error('Unable to copy obj! Its type is not supported.');
}
```

### Explanation of the Deep Clone Function
- **Base Case**: If the object is not an object or is `null`, return it directly.
- **Arrays**: If it's an array, clone each element.
- **Functions**: If it's a function, return a bound copy of the function to an empty object. This maintains the function but does not bind it to the original object's context.
- **Objects**: If it's a regular object, recursively copy each property.

### Step 3: Test the Deep Clone Function
We need to verify if the deep clone function works as expected, particularly that it copies the method and executes it in the context of the new object.

```javascript
// Clone the object
const clonedObj = deepClone(originalObj);

// Test the method
clonedObj.greet();  // Should output: "Hello, my name is Alice!"

// Verify that changes to the cloned object do not affect the original
clonedObj.name = "Bob";
clonedObj.details.age = 25;
console.log(originalObj.name);  // Outputs: "Alice"
console.log(originalObj.details.age);  // Outputs: 30
```

### Conclusion
The deep clone function provided can handle objects with nested properties and methods, and the testing shows that it works as expected, maintaining separation between the original and the cloned objects. This implementation is easy to understand and effective for most common use cases in JavaScript.


---
title: Truthy and Falsy values
description:
duration: 600
card_type: cue_card
---

### Truthy and Falsy Values in JavaScript

In JavaScript, truthy and falsy values are an important concept that deals with how values are treated when evaluated in a Boolean context. This can affect flow control (like in `if` statements) and logical operations.

#### Falsy Values
Falsy values in JavaScript are values that are considered false when evaluated in a Boolean context. There are exactly six falsy values in JavaScript:
1. `false` - The boolean value false.
2. `0` - The number zero.
3. `-0` - Negative zero.
4. `""` (empty string) - A string with no content.
5. `null` - Represents no value or a null reference.
6. `undefined` - Indicates a variable has not been assigned a value.
7. `NaN` - Stands for "Not a Number", used as a result of an undefined or erroneous arithmetic operation.

Here's a code example that demonstrates how each falsy value behaves in a conditional statement:

```javascript
// List of falsy values
const falsyValues = [false, 0, -0, "", null, undefined, NaN];

// Test each falsy value in an if statement
falsyValues.forEach(value => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});
```

In this example, the console will print "`falsy`" for each value, indicating that none of them satisfy the `if` condition.

#### Truthy Values
Truthy values are all the values in JavaScript that are not falsy. This includes:
- All numbers (positive and negative) except zero and NaN.
- All strings except the empty string `""`.
- All objects, including arrays and functions, even if they are empty.

Here’s a code example to illustrate truthy values:

```javascript
// Examples of truthy values
const truthyValues = [1, -1, "hello", {}, [], () => {}];

// Test each truthy value in an if statement
truthyValues.forEach(value => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});
```

In this example, the console will print "`truthy`" for each value, as they all pass the `if` condition.

### Applications of Truthy and Falsy Values

Truthy and falsy values are used extensively in JavaScript programming for several purposes:

1. **Conditional Execution:** Simplify conditions in `if` statements, ternary operators, or anywhere else a condition is needed. It helps in writing concise and less verbose code.
   ```javascript
   const message = "";
   if (!message) {
     console.log("No message provided");
   }
   ```

2. **Logical Operators:** In logical operations like `&&` and `||`, JavaScript returns one of the operands' actual values, not just true or false. This is used for assigning default values or running functions conditionally.
   ```javascript
   const port = process.env.PORT || 3000; // Use PORT from environment or default to 3000
   console.log(`Server running on port ${port}`);
   ```

3. **Function Arguments:** Check if optional arguments are provided or fall back to a default.
   ```javascript
   function greet(name) {
     name = name || "Guest";
     console.log(`Hello, ${name}!`);
   }
   ```

Understanding truthy and falsy values can help in mastering JavaScript's behavior in various scenarios, leading to better coding practices and debugging skills.