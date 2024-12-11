

## Agenda
**Topics to cover in Javascript Oops-1**
* This keyword 
* This keyword in browser (strict and non strict)
* This keyword in Node.js (strict and non strict)
* This keyword with Arrow Functions


It is going to be a very interesting session covering topics that are asked very frequently in interviews.

So let's start.



## This Keyword


1. **Introduction to `this` keyword:**
   a. Explain that `this` is a special keyword in JavaScript that refers to the current execution context or the current object.
   b. Mention that its value depends on how a function is called, rather than where it is defined.

2. **Global Context:**
   a. Describe that in the global context (outside of any function), `this` refers to the global object (e.g., `window` in browsers, `global` in Node.js).

3. **Function Context:**
   a.  Explain that within a function, the value of `this` can change based on how the function is invoked.
   b.  Discuss function invocation methods:
   c. Regular function invocation: `this` usually refers to the global object (in non-strict mode) or `undefined` (in strict mode).
   d. Method invocation: `this` refers to the object that the method is called on.

   e. Constructor invocation: `this` refers to the instance being created by the constructor function.(future class)

   f. `call()` and `apply()` methods: Explicitly set `this` for a function call. (this we will underdtand in future classes)
  
   g Arrow functions: `this` retains the value of the enclosing lexical context.(this we will understand today on what are arrow functions)

4. **Object-Oriented Programming (OOP) and `this`:**
   - Explain how `this` is used in the context of OOP to refer to the instance of an object.

   - Describe how methods within an object can access other properties and methods using `this`.


9. **Browser vs. Node.js:**
   - Mention the differences in the global object (`window` vs. `global`) and how they affect `this` behavior.

### `this` keyword in Node.js in non-strict mode

let's break down the behavior of the `this` keyword in Node.js in non-strict mode for each of the scenarios.

Assumption: `fn` is a function defined globally, and `obj` is an object containing a method `fn`.

```javascript
// Scenario 1: Console.log(this)
console.log("Scenario 1:");
console.log(this); // Output: {}

// Scenario 2: Console.log(this) -> fn = global object
console.log("Scenario 2:");
function fnGlobal() {
  console.log(this);
}
fnGlobal();

// Scenario 3: this -> obj -> fn = object itself
console.log("Scenario 3:");
var obj = {
  fn: function () {
    console.log(this); 
  }
};
obj.fn();

// Scenario 4: this -> obj -> fn -> fn = global object
console.log("Scenario 4:");
var obj2 = {
  fn: function () {
    console.log(this);
    var nestedFn = function () {
      console.log(this); 
    };
    nestedFn();
  }
};
obj2.fn();
```

Now, let's summarize these scenarios in a tabular form:

| Scenario | Code                                   | Output                                    | Explanation                                        |
|----------|-----------------------------------------|-------------------------------------------|----------------------------------------------------|
| 1        | `console.log(this);`                   | `{}`                                      | In global context, `this` refers to the empty object. |
| 2        | `function fnGlobal() {...}`<br>`fnGlobal();` | global object (inside the function)              | In a regular function, `this` refers to the global object. |
| 3        | `obj.fn = function() {...}`<br>`obj.fn();` | object Itself (inside the method)                | Inside an object method, `this` refers to the object itself. |
| 4        | `obj2.fn = function() {...}`<br>`obj2.fn();` | global object (inside the method)<br>`true` (inside nested function) | Inside a nested function, `this` reverts to the global object. |

In scenarios 3 and 4, `this` refers to the object containing the method when that method is directly invoked. However, when a nested function is defined within the method and invoked within it, `this` inside the nested function refers to the global object (`global` in Node.js).

Understanding these behaviors helps in writing clean and predictable code, especially when dealing with methods and nested functions within objects.

### `this` keyword in Browser in non-strict mode

let's break down the behavior of the `this` keyword in Browser in non-strict mode for each of the scenarios.

Assumption: `fn` is a function defined globally, and `obj` is an object containing a method `fn`.

let's break down each scenario and then summarize them in a tabular form.

**Scenario 1: `console.log(this)`**

```javascript
console.log(this); // Window Object
```

In this scenario, if you directly execute `console.log(this)` in the global context of a web browser (not within any function or object), the output will be the `Window` object. 


**Scenario 2: `console.log(this)` inside a function**

```javascript
function exampleFunction() {
  console.log(this);
}

exampleFunction(); // Window Object
```

In this case, when you call `exampleFunction()`, it's being invoked as a regular function. The `this` inside the function still refers to the  (`Window` in the browser).

**Scenario 3: `this` inside an object method**

```javascript
var obj = {
  prop: 'I am a property',
  method: function() {
    console.log(this.prop);
  }
};

obj.method(); // "I am a property"
```

In this scenario, `obj` is an object containing a method named `method`. When you call `obj.method()`, the `this` inside the `method` refers to the `obj` itself. Therefore, `this.prop` accesses the `prop` property of the `obj` object.

**Scenario 4: `this` inside nested functions**

```javascript
var obj = {
  prop: 'I am a property',
  method: function() {
    var nestedFunction = function() {
      console.log(this.prop);
    };
    nestedFunction();
  }
};

obj.method(); // undefined
```

Here, within the `nestedFunction`, `this` refers to the global object (`Window` in the browser). This is because the function `nestedFunction` is not a method of `obj`. As a result, `this.prop` will be `undefined` since the global object doesn't have a `prop` property.

Now, let's summarize these scenarios in a tabular form:

| Scenario                   | `this` Value                   | Explanation                                                                   |
|---------------------------|--------------------------------|-------------------------------------------------------------------------------|
| `console.log(this)`       | Window Object                  | Global context, `this` refers to the  (`Window Object` in browser).     |
| fn({`console.log(this)`}       | Window Object                  | Inside a regular function, `this` still refers to the window object.          |
| `this` in object method   | `obj` (object itself)          | Inside a method, `this` refers to the object on which the method is invoked. |
| `this` in nested function | Window Object                  | Inside a nested function, `this` refers to the window Object.                 |

Understanding these scenarios is important for grasping how `this` behaves in different contexts within a browser environment.

### `this` keyword in Node.js in strict mode

JavaScript strict mode is a feature that was introduced in ECMAScript 5 (ES5). When you use strict mode in JavaScript, it enforces a stricter set of rules and provides better error handling, which helps developers write cleaner, more secure code and catch common programming mistakes.

Some of the key characteristics and benefits of strict mode include:

1. **Prevents the use of undeclared variables:** In non-strict mode, if you assign a value to a variable without declaring it first with `var`, `let`, or `const`, JavaScript creates a global variable. In strict mode, this behavior is not allowed, and attempting to assign a value to an undeclared variable will result in an error.

2. **Disallows duplicate parameter names:** In non-strict mode, defining multiple function parameters with the same name is allowed. Strict mode disallows this, preventing potential bugs and improving code readability.



To enable strict mode in JavaScript, you can add the string `"use strict";` at the beginning of a script,  When `"use strict";` is present at the beginning of a script file or a function body, strict mode applies to all code within that file or function.

let's break down the behavior of the `this` keyword in Node.js in strict mode for each of the scenarios

Assumption: `fn` is a function defined globally, and `obj` is an object containing a method `fn`. Here's what each scenario seems to be referring to:

1. **`console.log(this)` (Scenario 1)**:
   ```javascript
   "use strict";
   console.log(this); // Outputs an empty object ({})
   ```
   In strict mode, when you log `this` in the global context, it will be an empty object `{}`. This is because strict mode prevents the default binding of `this` to the global object.

2. **`console.log(this)` with Undefined Function (Scenario 2)**:
   ```javascript
   "use strict";
   function myFunction() {
     console.log(this);
   }
   myFunction(); // Outputs undefined
   ```
   In strict mode, when you call a function without specifying its context (`this`), it's set to `undefined`. This is different from non-strict mode, where it would point to the global object.

3. **`this` Inside an Object Method (Scenario 3)**:
   ```javascript
   "use strict";
   var obj = {
     prop: "I'm a property",
     method: function() {
       console.log(this.prop);
     }
   };
   obj.method(); // Outputs "I'm a property"
   ```
   When a method is invoked on an object, `this` within the method refers to the object itself. So, `this.prop` accesses the `prop` property of the `obj` object.

4. **`this` Inside Nested Object Methods (Scenario 4)**:
   ```javascript
   "use strict";
   var outerObj = {
     innerObj: {
       method: function() {
         console.log(this);
       }
     }
   };
   outerObj.innerObj.method(); // Outputs the inner object
   ```
   Inside nested object methods, `this` refers to the closest containing object. In this case, it points to `innerObj` when the `method` is invoked.

Now, let's summarize these scenarios in tabular form:

| Scenario | Example Code                                | `this` Value           | Explanation                                                      |
|----------|---------------------------------------------|------------------------|------------------------------------------------------------------|
| 1        | `console.log(this);`                        | `{}`                   | In strict mode, `this` is an empty object in the global context. |
| 2        | `myFunction();`                             | `undefined`            | Calling a function without context results in `undefined`.     |
| 3        | `obj.method();`                            | `obj` object reference| `this` in an object method points to the object itself.         |
| 4        | `outerObj.innerObj.method();`              | `innerObj` object reference | In nested methods, `this` refers to the closest containing object.  |

Understanding these scenarios and how `this` behaves in different contexts is crucial for writing reliable and maintainable code.


### `this` keyword in Browser in strict mode

Certainly, let's break down the behavior of the `this` keyword in Browser in strict mode for each of the scenarios you mentioned. After that, I'll provide a summary in tabular form.

Assumption: `fn` is a function defined globally, and `obj` is an object containing a method `fn`. Assuming you have the following setup in a browser environment:

```javascript
"use strict";

// Scenario 2
console.log("Scenario 2:");
console.log(this); // Output: undefined

// Scenario 3
var obj = {
  fn: function () {
    console.log("Scenario 3:");
    console.log(this); // Output: obj
  },
};

// Scenario 4
var fn = obj.fn;

// Scenario 1
console.log("Scenario 1:");
console.log(this); // Output: window

// Scenario 4 (contd.)
console.log("Scenario 4:");
fn(); // Output: undefined
```

Now, let's summarize these scenarios in a tabular form:

| Scenario | Code                                             | `this` Value         | Explanation                                                                                       |
|----------|--------------------------------------------------|----------------------|---------------------------------------------------------------------------------------------------|
| 1        | `console.log(this);`                            | `window` object     | In the global context, `this` refers to the global object (`window` in browsers).               |
| 2        | `"use strict"; console.log(this);`             | `undefined`         | In strict mode, `this` in the global context is `undefined`.                                    |
| 3        | `obj.fn();`                                     | `obj` object        | When calling a method (`fn`) of an object (`obj`), `this` refers to the object itself (`obj`). |
| 4        | `var fn = obj.fn; fn();`                        | `undefined`         | When a method (`fn`) is assigned to a variable (`fn`) and called, `this` is `undefined`.        |

In summary:

1. In the global context, outside of any function, `this` refers to the global object (`window` in browsers).
2. In strict mode, in the global context, `this` is `undefined`.
3. When a function is a method of an object, `this` within the function refers to the object itself.
4. If a method is assigned to a variable and then invoked, `this` inside the method will be `undefined`.

Remember, the behavior of `this` can be a bit tricky, especially when dealing with nested functions, callbacks, and different contexts. Understanding these scenarios helps you write more predictable and maintainable code in JavaScript.


## `this` keyword in Arrow Function

* but first What is an arrow function?

 In JavaScript, an arrow function is a shorter way to write a function. It's called an arrow function because it uses an arrow `=>` to define it.

Here's a simple explanation with code:

Regular function:
```javascript
function add(a, b) {
  return a + b;
}
```

Arrow function:
```javascript
const add = (a, b) => {
  return a + b;
};
```

In this example, both functions `add` do the same thing: they take two numbers `a` and `b` and return their sum. The arrow function just looks a bit different and is shorter. You can use arrow functions especially when you have short functions or when you want to keep your code concise.

But not only to make your code consise arrow function is there , there are some diffrences as well to note between a regular function and an arrow function on how they handle the this keyword

Let's see how an arrow function handles the `this` keyword


 In JavaScript, the behavior of the `this` keyword differs between regular functions and arrow functions. Let's compare them with code examples:

### Regular JavaScript Function:

```javascript
// Define an object
const obj = {
  name: 'John',
  regularFunc: function() {
    console.log('Regular function:', this.name);
  }
};

// Call the regular function method
obj.regularFunc(); // Output: Regular function: John

// Assign the regular function to a variable
const regularFuncVar = obj.regularFunc;

// Call the regular function through the variable
regularFuncVar(); // Output: Regular function: undefined (or an error in strict mode)
```

In a regular function, the value of `this` is determined by how the function is called. When a regular function is called as a method of an object, `this` refers to the object itself (`obj` in this case). However, if the function is called without any context, `this` typically refers to the global object (`window` in browsers, or `undefined` in strict mode).

### Arrow Function:

```javascript
// Define an object
const obj = {
  name: 'John',
  arrowFunc: () => {
    console.log('Arrow function:', this.name);
  }
};

// Call the arrow function method
obj.arrowFunc(); // Output: Arrow function: undefined

// Assign the arrow function to a variable
const arrowFuncVar = obj.arrowFunc;

// Call the arrow function through the variable
arrowFuncVar(); // Output: Arrow function: undefined
```

In an arrow function, the value of `this` is lexically scoped, meaning it's determined by the surrounding scope where the arrow function is defined, rather than how it is called. As a result, arrow functions do not have their own `this` context; they inherit the `this` value from the enclosing lexical context. 


In the examples above, `this` within the arrow function refers to the `this` value of the enclosing scope where `obj.arrowFunc` is defined, which is typically the global object (`window`), resulting in `undefined`.

In summary, arrow functions do not have their own `this` binding, whereas regular functions do, and the value of `this` in a regular function depends on how it is called.

Start the doubt Session!