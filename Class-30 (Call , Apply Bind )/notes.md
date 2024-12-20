
---
title: Agenda
description: Call Apply Bind and their Polyfills
duration: 2100
card_type: cue_card
---


**Agenda**
* Call method
* Apply Method
* Bind Method
* Polyfill of Call
* Polyfill of apply
* Polyfill of Bind



---
title: Call Method
description: 
duration: 2100
card_type: cue_card
---

Before Moving to the `Call` method , Let's first see a basic Object example , We will create a basic object method and will call it

```js
const person1 = {
    name : 'Mrinal',
    age : 25,

    printNameAndAge :function(){
      console.log(`My name is ${this.name} and I am ${this.age} years old`)
    },
}

person1.printNameAndAge()

```


What will this code do? 

As you already know that the `this keyword` over here in this object is inside a method , So it will point to the object itself and we can access properties of this object by just accessing the key for the value 

**So the output will be**

`My name is Mrinal and I am 25 years old`

Perfect!


Now suppsoe we create another object and extend the code


```js
const person1 = {
    name : 'Mrinal',
    age : 25,

    printNameAndAge :function(){
      console.log(`My name is ${this.name} and I am ${this.age} years old`)
    },
}


const person2 = {
    name : 'Mark'
    age : 30
}

person1.printNameAndAge()


person2.printNameandAge()

```

What happens here?



**The output for this code will be-**

`My name is Mrinal and I am 25 years old`
`Uncaught TypeError: person2.printNameandAge is not a function`

Exactly! because for the `person1 object` the method is defined so the this keyword can access the properties of the object,and prinyts the desired result

but for `person2 object` there is no method defined and by the name `printNameandAge`

So, What can be the possible solutions if we want to print the name and age for the `person2` as well

You will say we can define the same `printNameandAge` method inside person 2 and then we call it

But What if tell you there is another way in which you can call the method `printAgeandName` for person2 withot even defining it for the person2 object!


In situations like this we can use the call method

Now what is the call method and what it does?

In JavaScript, the call() method is a powerful function used to invoke (call) a function and explicitly set what this refers to within that function.

Imagine you have a function that needs to behave as if it belongs to an object, even though it wasn't originally written as part of that object. The call() method allows you to do just that. It lets you run the function as if it is a method of any object you choose by specifying that object as the first argument of call(). it basically sets the context of the this keyword for the Object you are trying to call the method for


Let's use it 

To allow `person2` to use the `printNameAndAge` method from `person1`, we will utilize the JavaScript `call` method

```javascript
const person1 = {
    name: 'Mrinal',
    age: 25,

    printNameAndAge: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    },
};

const person2 = {
    name: 'Mark',
    age: 30
};

person1.printNameAndAge(); // Direct method call on person1

// Using the call method to allow person2 to use person1's method
person1.printNameAndAge.call(person2);
```

**The output now will be**

`My name is Mrinal and I am 25 years old`
`My name is Mark and I am 30 years old`



### How the `call` Method Works:

1. **Identify the Function**: First, you identify the function you want to invoke. In this case, it's `person1.printNameAndAge`.

2. **The `call` Method**: You apply `.call()` to this function. This method allows you to specify the context (`this` value) in which the function should be executed. The first argument you pass to `call` becomes the `this` inside that function.

3. **Setting the Context**: By writing `person1.printNameAndAge.call(person2);`, you are telling JavaScript to execute `person1`'s `printNameAndAge` method but with `person2` as the `this` context. That means `this.name` and `this.age` within `printNameAndAge` now refer to the properties of `person2`.

4. **Function Execution**: The function runs as if `person2` has its own `printNameAndAge` method, displaying "My name is Mark and I am 30 years old"


Not Only this you can also pass arguments with the call method , let's see how passing arguments works



### Example with Additional Parameters:

First, let's extend the `printNameAndAge` method to accept an additional parameter, `location`, and incorporate that into the code:

```javascript
const person1 = {
    name: 'Mrinal',
    age: 25,

    printNameAndAge: function(location) {
        console.log(`My name is ${this.name}, I am ${this.age} years old, and I live in ${location}.`);
    },
};

const person2 = {
    name: 'Mark',
    age: 30
};

// Using printNameAndAge with person1's context and an additional argument
person1.printNameAndAge('New York');

// Using call to invoke person1's method on person2 with an additional argument
person1.printNameAndAge.call(person2, 'San Francisco');
```

### How Arguments are Passed with the `call` Method:

1. **Function and Context**: As before, you start with the function you want to invoke, `person1.printNameAndAge`, and use the `call` method.

2. **Setting the Context**: The first argument of `call` sets the `this` context. In the example `person1.printNameAndAge.call(person2, 'San Francisco');`, `person2` is used as the context. Thus, inside the function, `this.name` resolves to 'Mark' and `this.age` to 30.

3. **Passing Additional Arguments**: After the context argument, any subsequent arguments you pass to `call` are passed as arguments to the function being invoked. In the example, the string `'San Francisco'` is passed as the `location` parameter to the `printNameAndAge` function. Therefore, the function outputs: `My name is Mark, I am 30 years old, and I live in San Francisco.`

The ability to specify both the context and additional arguments makes `call` very powerful and flexible for function invocation in JavaScript, especially for methods that need to be shared or reused across different objects with similar structures but different data.


This is how the `call` method works.

---
title: Apply Method
description: 
duration: 2100
card_type: cue_card
---


The `apply` method in JavaScript is similar to the `call` method but differs in how it handles arguments passed to the function. 

Both methods are used to invoke a function with a specified `this` context, allowing you to control what `this` refers to within the function. 

However, while `call` requires arguments to be listed explicitly, `apply` takes arguments as an array, making it suitable for situations where the number of arguments is not fixed or needs to be dynamically determined.

Here’s a breakdown of how the `apply` method works using a similar example:

### Basic Object Example
First, let’s create an object with a method that we might want to invoke with a different `this` context:

```javascript
const person1 = {
    name: 'Mrinal',
    age: 25,

    describe: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
};

person1.describe();  // Output: My name is Mrinal and I am 25 years old
```

### Extending the Code with Another Object
Suppose we have another object, `person2`, and we want to use the `describe` method from `person1` but with `person2` as the `this` context:

```javascript
const person2 = {
    name: 'Mark',
    age: 30
};
```

### Using the `apply` Method
To use `person1`'s `describe` method with `person2` as the context, we can use `apply`:

```javascript
person1.describe.apply(person2);  // Output: My name is Mark and I am 30 years old
```

Here, `apply` allows `person2` to use `person1`'s `describe` method. The `apply` method does not need any additional arguments for this case, but if there were any, they would be passed as an array.

### Example with Additional Parameters
Let’s enhance the `describe` method to accept additional parameters such as location and hobby:

```javascript
const person1 = {
    name: 'Mrinal',
    age: 25,

    describe: function(location, hobby) {
        console.log(`My name is ${this.name}, I am ${this.age} years old, I live in ${location}, and my hobby is ${hobby}.`);
    }
};

// Using describe with person1's context and additional arguments
person1.describe('New Delhi', 'coding');

// Using apply to invoke person1's method on person2 with additional arguments
person1.describe.apply(person2, ['San Francisco', 'hiking']);
```

### How Arguments are Passed with the `apply` Method:
1. **Function and Context**: You start with the function you want to invoke (`person1.describe`) and use `apply`.
2. **Setting the Context**: The first argument of `apply` sets the `this` context. In our example, `person2` is used as the context.
3. **Passing Additional Arguments**: The second argument of `apply` is an array containing any additional arguments to pass to the function. In the example, `['San Francisco', 'hiking']` is passed, and these values are used as the `location` and `hobby` parameters within the function.

The use of `apply` is particularly useful when you need to pass an array of arguments to a function dynamically, making it a powerful tool for scenarios where functions need to be flexible with input parameters or when dealing with functions that take variable numbers of arguments.


Let's see an Example of Why we need apply method and where it can be useful and what do I mean by when I say it can handle dynamic data


The `apply` method is especially useful in scenarios where you need to pass an array of arguments to a function, which might not be known until runtime, or when working with functions that accept a variable number of arguments. This is advantageous over the `call` method when dealing with arrays of arguments dynamically or when the number of arguments is not fixed.

Here's an example that illustrates why you might prefer `apply` over `call` in certain situations:

### Scenario: Calculating Maximum of Array Elements
Imagine you need to find the maximum number in an array. JavaScript provides the `Math.max()` function, which returns the largest of zero or more numbers. However, `Math.max()` does not accept an array directly; it expects numbers as separate arguments.

Here's how `apply` can be used to solve this problem efficiently:

```javascript
const numbers = [5, 6, 2, 3, 7];

// Using Math.max directly with an array does not work:
// Math.max(numbers); // NaN - because Math.max expects separate number arguments, not a single array.

// Using apply to spread the numbers array into individual arguments:
const maxNumber = Math.max.apply(null, numbers);

console.log(maxNumber);  // Output: 7
```

### Why `apply` Is Needed
- **Dynamic Argument Lists**: In this case, the `numbers` array could change in size dynamically. With `apply`, you can pass any array of numbers regardless of its size, and `Math.max` will be called as if you wrote `Math.max(5, 6, 2, 3, 7)`.
- **Ease of Use**: Using `apply` is simpler and cleaner than manually spreading an array into function arguments or using loops to determine the maximum value.

### Comparison with `call`
Using `call`, you would have to explicitly know and pass each element of the array as a separate argument, which is impractical for large or dynamically changing arrays:

```javascript
// Hypothetically using call for a known, fixed set of arguments:
const maxNumberUsingCall = Math.max.call(null, 5, 6, 2, 3, 7);  // This works but is not dynamic.

console.log(maxNumberUsingCall);  // Output: 7
```

However, with the introduction of ES6 spread syntax, you can achieve a similar result to `apply` with cleaner syntax, making the spread operator often a better choice for situations like this:

```javascript
// Using ES6 spread operator:
const maxNumberUsingSpread = Math.max(...numbers);

console.log(maxNumberUsingSpread);  // Output: 7
```

### Conclusion
The `apply` method is a powerful tool when dealing with functions that need to handle variable numbers of arguments or when you want to pass an array as arguments to a function. While the ES6 spread operator offers a modern alternative, understanding `apply` remains important for contexts where older JavaScript versions are used or when manipulating the `this` context in more complex ways.


---
title: Bind Method
description: 
duration: 2100
card_type: cue_card
---

### What is the `bind` method?

The `bind` method in JavaScript is like giving a function a reminder of who it is talking about. When you have a function that uses `this` to refer to an object, `bind` helps make sure that `this` always refers to the object you want, even if the function is used in different places or in different ways.

### Basic Example

Imagine you have a friend named Alice, and you want to introduce her at a party. You might say something like:

```javascript
const alice = {
    name: 'Alice',
    age: 30,
    introduce: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
};

const introduceAlice = alice.introduce.bind(alice);
```

In this example:
- Alice is an object with properties `name` and `age`, and a method called `introduce`.
- The `introduce` method prints a message about Alice using `this.name` and `this.age`.
- We use `bind` to create a new function `introduceAlice` that "remembers" to talk about Alice, no matter where we use it.

If you were to use `introduceAlice()` somewhere in your program, it would always print Alice's introduction, ensuring that `this` inside `introduce` always refers to Alice.

### Using `bind` in Event Handlers

 This example will demonstrate how to use `bind` to ensure that a method maintains its context (`this`) when used as an event handler in a web application.

### HTML Setup
First, we'll need a simple HTML button that users can click to trigger the event:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bind Method Example</title>
</head>
<body>
    <button id="introduceButton">Introduce Alice</button>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Code
Now, let's write the JavaScript code that defines an object and uses the `bind` method for an event handler. This script should be saved in a file named `script.js` which is referenced in the HTML above:

```javascript
// Define an object with properties and a method
const alice = {
    name: 'Alice',
    age: 30,
    introduce: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Get the button element from the HTML
const button = document.getElementById('introduceButton');

// Add an event listener to the button
// We use bind to ensure 'this' inside introduce refers to 'alice'
button.addEventListener('click', alice.introduce.bind(alice));
```

### Explanation

1. **Object Definition**:
   - We create an object `alice` with properties `name` and `age`, and an `introduce` method that prints out Alice's name and age. This method uses `this` to refer to the properties of `alice`.

2. **Button Element**:
   - We retrieve the button element from the HTML using its ID `introduceButton`.

3. **Event Listener**:
   - We add an event listener to the button for the 'click' event. Normally, inside an event handler, `this` refers to the element that triggered the event (in this case, the button). However, we want `this` inside the `introduce` method to refer to `alice`.
   - To achieve this, we use `alice.introduce.bind(alice)`. This creates a new function where `this` is permanently set to refer to `alice`, no matter how the function is called. Thus, when the button is clicked, the console will correctly display "My name is Alice and I am 30 years old."

This setup ensures that even in the context of a DOM event, where `this` typically points to the triggering element (the button), the `introduce` method will always execute with `alice` as its context. This is the power and utility of using `bind` in JavaScript event handling.

### Conclusion

The `bind` method is a helpful tool that keeps functions connected to the objects they belong to. It's like making sure that even if a function is used in different situations, it doesn't forget who it's supposed to talk about. This is very useful in scenarios like handling events in web pages, where the context of `this` can easily get mixed up.


---
title: Simple Polyfill of Call Method
description: 
duration: 2100
card_type: cue_card
---

Let's try to create our own simple polyfill of the `call` method


Suppose we do not have support for the call method and now We need to create our own Polyfill for the `Call` method


```js
let car = {
    name: "Mercedes",
    color: "White",
  };
  
  function buyCar(price) {
    console.log(`I bought a ${this.color} ${this.name} of ${price} `);
  }

```

I have this simple code and now I want to call the `buyCar function` in context of the `car object` but it should be done from my implememtation of the call method , let's try building that


Polyfill of call method , (Go step by step)

```js
Function.prototype.myCall = function (context = {}, ...args) {
    //   console.log(this)

    if(typeof this !== 'function'){
        throw new Error (this + 'Is not callable')
      }
  
    // context -> car

    
  
    context.myFunction = this; // buyCar
  
    context.myFunction(...args);
  };
```

This code  is an implementation of a custom function named `myCall` by which we have tried to create our own sim ple implemenation of the call method

1. **Function.prototype.myCall definition**:
   ```javascript
   Function.prototype.myCall = function (context = {}, ...args) {
   ```
   This line adds a new method `myCall` to the `Function` prototype, making it available to all functions. The `myCall` method takes an initial argument `context` which will be used as the `this` context when the function is called. If `context` is not provided, it defaults to an empty object (`{}`). The `...args` uses rest parameters syntax to collect all remaining arguments passed into an array.

2. **Type check**:
   ```javascript
   if(typeof this !== 'function'){
       throw new Error (this + 'Is not callable')
   }
   ```
   This section checks if the method where `myCall` is being applied is actually a function. If `this` (referring to the function on which `myCall` is invoked) is not a function, it throws an error. This ensures that `myCall` is only used with functions.

3. **Assigning the function to the context**:
   ```javascript
   context.myFunction = this; // buyCar
   ```
   Here, the function (referred to by `this`) is assigned to a property `myFunction` on the `context` object. The comment `// buyCar` seems to be an example indicating that if this were a method named `buyCar`, it would now be available as `context.myFunction`.

4. **Executing the function with the context and arguments**:
   ```javascript
   context.myFunction(...args);
   ```
   The function is then called as a method of `context` using the spread syntax to pass the collected `args`. This line is where the function that `myCall` was called on actually executes, using the provided `context` as `this` and `args` as its arguments.


### Example Usage:

```js
let car = {
    name: "Mercedes",
    color: "White",
  };
  
  function buyCar(price) {
    console.log(`I bought a ${this.color} ${this.name} of ${price} `);
  }


Function.prototype.myCall = function (context = {}, ...args) {
    //   console.log(this)

    if(typeof this !== 'function'){
        throw new Error (this + 'Is not callable')
      }
  
    // context -> car

    
  
    context.myFunction = this; // buyCar
  
    context.myFunction(...args);
  };
  
  buyCar.myCall(car, "3000000");


```

 the line `buyCar.myCall(car, "3000000");` uses the custom `myCall` function to invoke the `buyCar` function with a specified context (`car`) and an argument (`"3000000"`). Here's what happens step-by-step:

1. **myCall function is called on buyCar**: `buyCar.myCall(car, "3000000")` is effectively calling `myCall` with `this` set to the `buyCar` function, `context` set to the `car` object, and `args` containing the string `"3000000"`.

2. **Setting the context**: Inside `myCall`, `context.myFunction = this;` assigns the `buyCar` function to a new property `myFunction` on the `car` object.

3. **Invoking the function**: `context.myFunction(...args);` translates to `car.myFunction("3000000");`. Here, `car.myFunction` refers to the `buyCar` function, and since it is called as a method of `car`, `this` inside `buyCar` refers to the `car` object.

4. **Function execution**: The `buyCar` function executes with `this` bound to the `car` object. Therefore, `this.name` is `"Mercedes"` and `this.color` is `"White"`. The argument `"3000000"` is passed as `price`.

5. **Output**: The function prints:
   ```
   I bought a White Mercedes of 3000000 
   ```
   This output is produced by the `console.log` statement inside `buyCar`, which uses the color and name from the `car` object and the price passed as an argument.

In summary, the `buyCar.myCall(car, "3000000")` line enables the `buyCar` function to run in the context of the `car` object and outputs a statement indicating the purchase of a car with the specified attributes and price.


This is how You can Implememt the polyfill for `Call method`.

---
title: Simple Polyfill of Apply Method
description: 
duration: 2100
card_type: cue_card
---

To create a polyfill for the `apply` method, which is similar to the `call` method but takes an array of arguments rather than a list of arguments, we can adapt the previous approach used for `myCall`. 


The `apply` method is primarily different in how it handles the arguments passed to the function, accepting an array rather than a comma-separated list.

Here's a simple implementation of `myApply` and an explanation 

```javascript
Function.prototype.myApply = function (context = {}, argsArray = []) {
    if (typeof this !== 'function') {
        throw new Error(this + ' is not callable');
    }

    if(!Array.isArray(args)){
        throw new Error (this + 'We need an array for args')
    }

    context.tempFunction = this; // Assign this function to a property on the context object

    context.tempFunction(...argsArray); // Spread the argsArray and invoke the function
};
```

### Polyfill of apply method (Step by Step)

1. **Function.prototype.myApply definition**:
   ```javascript
   Function.prototype.myApply = function (context = {}, argsArray = []) {
   ```
   This line defines a new method `myApply` on the `Function` prototype. It allows any function to use this method. `context` serves as the `this` value for the function when it's called. If `context` is not provided, it defaults to an empty object. `argsArray` is expected to be an array of arguments that will be passed to the function.

2. **Type check**:
   ```javascript
   if (typeof this !== 'function') {
       throw new Error(this + ' is not callable');
   }

     if(!Array.isArray(args)){
        throw new Error (this + 'We need an array for args')
    }
   ```
   Similar to the `myCall` implementation, this checks to ensure that `myApply` is only called on functions. If not, it throws an error indicating the object is not callable also the secind check checks for if the args were passed inside an Array or not

3. **Assigning the function to the context**:
   ```javascript
   context.tempFunction = this;
   ```
   The function that `myApply` is called on (referred to by `this`) is temporarily assigned to a property `tempFunction` on the `context` object.

4. **Executing the function with the context and arguments array**:
   ```javascript
   context.tempFunction(...argsArray);
   ```
   Using the spread operator, `argsArray` is passed as individual arguments to the function. This line executes the function, applying the provided `context` as `this` and using the elements of `argsArray` as arguments.

### Example Usage:

```js
let car = {
    name: "Mercedes",
    color: "White",
};

function buyCar(price) {
    console.log(`I bought a ${this.color} ${this.name} for ${price}`);
}

buyCar.myApply(car, ["3000000"]);
```

Explanation on how it is invoked `buyCar.myApply(car, ["3000000"]);`:

1. **myApply function is called on buyCar**: `buyCar.myApply(car, ["3000000"])` calls `myApply` with `this` set to the `buyCar` function, `context` set to the `car` object, and `argsArray` containing an array with one element, `"3000000"`.

2. **Setting the context**: Inside `myApply`, `context.tempFunction = this;` assigns the `buyCar` function to the `tempFunction` property on the `car` object.

3. **Invoking the function**: `context.tempFunction(...argsArray);` effectively becomes `car.tempFunction("3000000");`. Here, `car.tempFunction` refers to the `buyCar` function, and it's called with `"3000000"` as the argument.

4. **Function execution**: The function is executed with `this` bound to the `car` object, so `this.name` is `"Mercedes"` and `this.color` is `"White"`, and the price `"3000000"` is passed as an argument.

5. **Output**: The function prints:
   ```
   I bought a White Mercedes for 3000000 
   ```
   This demonstrates how the function can be applied to the `car` object, utilizing its properties and the argument provided.

This implementation allows the `buyCar` function to be executed in the context of the `car` object with arguments passed as an array, mirroring the functionality of the original `apply` method.


---
title: Simple Polyfill of Bind Method
description: 
duration: 2100
card_type: cue_card
---

The `bind` method in JavaScript is used to create a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. Here's how you can create a polyfill for the `bind` method:

### Polyfill of bind method (Step by Step)
```javascript
Function.prototype.myBind = function (context, ...boundArgs) {
    if (typeof this !== 'function') {
        throw new Error(this + ' is not callable');
    }

    const targetFunction = this;  // The function on which myBind is called

    return function (...args) {
        return targetFunction.apply(context, [...boundArgs, ...args]);
    };
};
```

1. **Function.prototype.myBind definition**:
   ```javascript
   Function.prototype.myBind = function (context, ...boundArgs) {
   ```
   This adds a method `myBind` to the `Function` prototype, making it available to all functions. The `myBind` method takes a `context` object which will become the `this` value when the new function is called. The `...boundArgs` collects any additional arguments passed to `myBind`, which will be the initial arguments to the target function when the bound function is called.

2. **Type check**:
   ```javascript
   if (typeof this !== 'function') {
       throw new Error(this + ' is not callable');
   }
   ```
   This check ensures that `myBind` is applied only to functions, maintaining consistency with the original `bind` method by throwing an error if it's used incorrectly.

3. **Creating the bound function**:
   ```javascript
   return function (...args) {
       return targetFunction.apply(context, [...boundArgs, ...args]);
   };
   ```
   This section creates and returns a new function. When this new function is called, it calls `targetFunction` (the function on which `myBind` was invoked) using the `apply` method. The `apply` method is called with the `context` set as `this` and a combined array of `boundArgs` and any new arguments passed to the bound function (`...args`).

### Example Usage:

```javascript
let car = {
    name: "Mercedes",
    color: "White",
};

function buyCar(price, year) {
    console.log(`I bought a ${this.color} ${this.name} for ${price} made in ${year}`);
}

const buyMyCar = buyCar.myBind(car, "3000000");
buyMyCar("2020");
```

Explanation of `const buyMyCar = buyCar.myBind(car, "3000000");` and `buyMyCar("2020");`:

1. **myBind function is called on buyCar**: When `buyCar.myBind(car, "3000000")` is executed, `myBind` is called with `this` set to the `buyCar` function, `context` set to the `car` object, and `boundArgs` containing the string `"3000000"`.

2. **Returning the bound function**: Inside `myBind`, a new function is returned. This function is stored in `buyMyCar`.

3. **Invoking the bound function**: When `buyMyCar("2020")` is called, the new function executes `buyCar.apply(car, ["3000000", "2020"])`. Here, `car` is used as `this`, and the arguments are the combined list of bound arguments and the new arguments.

4. **Function execution**: The `buyCar` function executes with `this` bound to the `car` object. `this.name` is `"Mercedes"`, `this.color` is `"White"`, `"3000000"` is passed as `price`, and `"2020"` as `year`.

5. **Output**: The function prints:
   ```
   I bought a White Mercedes for 3000000 made in 2020
   ```
   This demonstrates how the bound function maintains the provided context (`car`) and combines the predefined and new arguments.

This implementation of `myBind` effectively mimics the original `bind` method, allowing the original function to be used in a specific context with predefined initial arguments, complemented by any additional arguments provided later when the bound function is called.



Start the Doubt Session
